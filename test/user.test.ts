import { describe, it, expect, afterEach, beforeEach } from "bun:test"
import app from "../src";
import { logger } from "../src/application/logging";
import { UserTest } from "./test-util";


describe('POST /api/users', () => {

  afterEach(async () => {
    await UserTest.delete();
  })

  it('should reject register new user if request is invalid', async () => {
    const response = await app.request('/api/users', {
      method: 'post',
      body: JSON.stringify({
        email: "",
        password: "",
        name: ""
      })
    })

    const body = await response.json()
    logger.debug(body)

    expect(response.status).toBe(400)
    expect(body.errors).toBeDefined()
  });

  it('should reject register new user if email already exists', async () => {
    await UserTest.create();

    const response = await app.request('/api/users', {
      method: 'post',
      body: JSON.stringify({
        email: "test@gmail.com",
        password: "test",
        name: "test"
      })
    })

    const body = await response.json()
    logger.debug(body)

    expect(response.status).toBe(400)
    expect(body.errors).toBeDefined()
  });

  it('should register new user success', async () => {
    const response = await app.request('/api/users', {
      method: 'post',
      body: JSON.stringify({
        email: "test@gmail.com",
        password: "test",
        name: "test"
      })
    })

    const body = await response.json()
    logger.debug(body)

    expect(response.status).toBe(200)
    expect(body.data).toBeDefined()
    expect(body.data.email).toBe("test@gmail.com")
    expect(body.data.name).toBe("test")
  });

})


describe('POST /api/users/login', () => {

  beforeEach(async () => {
    await UserTest.create()
  })

  afterEach(async () => {
    await UserTest.delete()
  })

  it('should be able to login', async () => {
    const response = await app.request('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email: "test@gmail.com",
        password: "test"
      })
    })

    expect(response.status).toBe(200)

    const body = await response.json();
    expect(body.data.token).toBeDefined();
  });

  it('should be rejected if email is wrong', async () => {
    const response = await app.request('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email: "wrongmail",
        password: "test"
      })
    })

    expect(response.status).toBe(401)

    const body = await response.json();
    expect(body.errors).toBeDefined();
  });

  it('should be rejected if password is wrong', async () => {
    const response = await app.request('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email: "test@gmail.com",
        password: "wrong"
      })
    })

    expect(response.status).toBe(401)

    const body = await response.json();
    expect(body.errors).toBeDefined();
  });

});


describe('GET /api/users/current', () => {

  beforeEach(async () => {
    await UserTest.create()
  })

  afterEach(async () => {
    await UserTest.delete()
  })

  it('should be able to get user', async () => {
    const response = await app.request('/api/users/current', {
      method: 'get',
      headers: {
        'Authorization': 'test'
      }
    })

    expect(response.status).toBe(200)

    const body = await response.json()
    expect(body.data).toBeDefined()
    expect(body.data.email).toBe("test@gmail.com")
    expect(body.data.name).toBe("test")
  });

  it('should not be able to get user if token is invalid', async () => {
    const response = await app.request('/api/users/current', {
      method: 'get',
      headers: {
        'Authorization': 'wrong'
      }
    })

    expect(response.status).toBe(401)

    const body = await response.json()
    expect(body.errors).toBeDefined()
  });

  it('should not be able to get user if there is no Authorization header', async () => {
    const response = await app.request('/api/users/current', {
      method: 'get'
    })

    expect(response.status).toBe(401)

    const body = await response.json()
    expect(body.errors).toBeDefined()
  });

});


describe('PATCH /api/users/current', () => {

  beforeEach(async () => {
    await UserTest.create()
  })

  afterEach(async () => {
    await UserTest.delete()
  })

  it('should be rejected if request is invalid', async () => {
    const response = await app.request('/api/users/current', {
      method: 'patch',
      headers: {
        'Authorization': 'test'
      },
      body: JSON.stringify({
        name: "",
        password: ""
      })
    })

    expect(response.status).toBe(400)

    const body = await response.json()
    expect(body.errors).toBeDefined()
  });

  it('should be able to update name', async () => {
    const response = await app.request('/api/users/current', {
      method: 'patch',
      headers: {
        'Authorization': 'test'
      },
      body: JSON.stringify({
        name: "john"
      })
    })

    expect(response.status).toBe(200)

    const body = await response.json()
    logger.error(body)
    expect(body.data).toBeDefined()
    expect(body.data.name).toBe("john")
  });

  it('should be able to update password', async () => {
    let response = await app.request('/api/users/current', {
      method: 'patch',
      headers: {
        'Authorization': 'test'
      },
      body: JSON.stringify({
        password: "new"
      })
    })

    expect(response.status).toBe(200)

    const body = await response.json()
    logger.error(body)
    expect(body.data).toBeDefined()
    expect(body.data.name).toBe("test")

    response = await app.request('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email: "test@gmail.com",
        password: "new"
      })
    })

    expect(response.status).toBe(200)
  });

});

describe('DELETE /api/users/current', () => {

  beforeEach(async () => {
    await UserTest.create()
  })

  afterEach(async () => {
    await UserTest.delete()
  })

  it('should be able to logout', async () => {
    const response = await app.request('/api/users/current', {
      method: 'delete',
      headers: {
        'Authorization': 'test'
      }
    })

    expect(response.status).toBe(200)

    const body = await response.json()
    expect(body.data).toBe(true)
  });

  it('should not be able to logout', async () => {
    let response = await app.request('/api/users/current', {
      method: 'delete',
      headers: {
        'Authorization': 'test'
      }
    })

    expect(response.status).toBe(200)

    const body = await response.json()
    expect(body.data).toBe(true)

    response = await app.request('/api/users/current', {
      method: 'delete',
      headers: {
        'Authorization': 'test'
      }
    })
    expect(response.status).toBe(401)
  });

});
