# 🐛 Bug Tracker Checklist

Track your progress as you identify and fix bugs using GitHub Copilot.

## Legend
- ⬜ = Not started
- 🔍 = Identified with Copilot
- 🔧 = Fix applied
- ✅ = Tested & verified

## App Configuration Bugs (app.js / server.js)

| # | Bug Description | Severity | Status | Copilot Feature Used |
|---|----------------|----------|--------|---------------------|
| 1 | bodyParser.json() never called | 🔴 Critical | ⬜ | |
| 2 | No CORS headers configured | 🟡 Medium | ⬜ | |
| 3 | Route prefix typo "/ordrs" | 🔴 Critical | ⬜ | |
| 4 | Missing global error handler | 🟡 Medium | ⬜ | |
| 5 | Port hardcoded, no env fallback | 🟢 Low | ⬜ | |
| 6 | No graceful shutdown handling | 🟢 Low | ⬜ | |

## Data Model Bugs (order.js)

| # | Bug Description | Severity | Status | Copilot Feature Used |
|---|----------------|----------|--------|---------------------|
| 7 | uuid not imported | 🔴 Critical | ⬜ | |
| 8 | Date.now missing parentheses | 🔴 Critical | ⬜ | |
| 9 | Total price never calculated | 🟡 Medium | ⬜ | |
| 10 | Loose equality (== vs ===) | 🟡 Medium | ⬜ | |
| 11 | findById returns index not object | 🔴 Critical | ⬜ | |
| 12 | update() overwrites entire object | 🔴 Critical | ⬜ | |
| 13 | splice() misuse in delete() | 🔴 Critical | ⬜ | |
| 14 | filter callback missing return | 🔴 Critical | ⬜ | |
| 15 | No calculateTotal method | 🟡 Medium | ⬜ | |
| 16 | No data validation method | 🟡 Medium | ⬜ | |

## Controller Bugs (orderController.js)

| # | Bug Description | Severity | Status | Copilot Feature Used |
|---|----------------|----------|--------|---------------------|
| 17 | No empty-array differentiation | 🟢 Low | ⬜ | |
| 18 | Exposes error stack trace | 🟡 Medium | ⬜ | |
| 19 | getOrderById uses index (falsy 0) | 🔴 Critical | ⬜ | |
| 20 | No input validation on create | 🟡 Medium | ⬜ | |
| 21 | req.body undefined (from Bug #1) | 🔴 Critical | ⬜ | |
| 22 | Returns 200 instead of 201 | 🟡 Medium | ⬜ | |
| 23 | Wrong error status code | 🟢 Low | ⬜ | |
| 24 | No check for empty update body | 🟡 Medium | ⬜ | |
| 25 | Broken update returns bad data | 🔴 Critical | ⬜ | |
| 26 | Returns 200 instead of 204 on delete | 🟢 Low | ⬜ | |
| 27 | Uses req.params instead of req.query | 🔴 Critical | ⬜ | |
| 28 | No status value validation | 🟡 Medium | ⬜ | |
| 29 | reduce() no initial value | 🔴 Critical | ⬜ | |
| 30 | .length() called as method | 🔴 Critical | ⬜ | |
| 31 | `pending` not in quotes | 🔴 Critical | ⬜ | |

## Route Bugs (orderRoutes.js)

| # | Bug Description | Severity | Status | Copilot Feature Used |
|---|----------------|----------|--------|---------------------|
| 32 | GET and POST swapped | 🔴 Critical | ⬜ | |
| 33 | :orderId vs :id param mismatch | 🔴 Critical | ⬜ | |
| 34 | /status conflicts with /:orderId | 🟡 Medium | ⬜ | |
| 35 | Wrong controller method name | 🔴 Critical | ⬜ | |

## Middleware Bugs (auth.js)

| # | Bug Description | Severity | Status | Copilot Feature Used |
|---|----------------|----------|--------|---------------------|
| 36 | Case-sensitive header access | 🟡 Medium | ⬜ | |
| 37 | Returns 403 instead of 401 | 🟡 Medium | ⬜ | |
| 38 | No actual token verification | 🔴 Critical | ⬜ | |
| 39 | No user info extracted from token | 🟡 Medium | ⬜ | |

## Utility Bugs (helpers.js)

| # | Bug Description | Severity | Status | Copilot Feature Used |
|---|----------------|----------|--------|---------------------|
| 40 | Floating point price issues | 🟡 Medium | ⬜ | |
| 41 | for...in on array | 🔴 Critical | ⬜ | |
| 42 | price * price instead of price * quantity | 🔴 Critical | ⬜ | |
| 43 | Validation logic inverted | 🔴 Critical | ⬜ | |
| 44 | Typo in status values array | 🟡 Medium | ⬜ | |
| 45 | Case-sensitive includes() | 🟡 Medium | ⬜ | |
| 46 | Pagination off-by-one error | 🟡 Medium | ⬜ | |
| 47 | Page starts from 0 not 1 | 🟡 Medium | ⬜ | |
| 48 | Slice end index wrong | 🟡 Medium | ⬜ | |
| 49 | No input sanitization (XSS risk) | 🟡 Medium | ⬜ | |
| 50 | toISOString() on function reference | 🔴 Critical | ⬜ | |

---
**Total Bugs: 50** | 🔴 Critical: 24 | 🟡 Medium: 20 | 🟢 Low: 6
