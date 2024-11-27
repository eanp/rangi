import { describe, it, expect, afterEach, beforeEach } from "bun:test"
import app from "../src";
import { logger } from "../src/application/logging";
import { UserTest } from "./test-util";

describe('GET /public/alpinejs@3.14.1.js', () => {

  it('should be able to get data', async () => {
    const response = await app.request('/public/alpinejs@3.14.1.js', {
      method: 'get',
    })

    expect(response.status).toBe(200)

    const data = response.headers.get('Content-Type')

    expect(data).toBe("text/javascript; charset=utf-8")
  });

  it('should not be able to get data', async () => {
    const response = await app.request('/public/alpinejs@3.14.js', {
      method: 'get'
    })

    const body = await response.json()
    expect(body.status).toBe("error")
  });

});

