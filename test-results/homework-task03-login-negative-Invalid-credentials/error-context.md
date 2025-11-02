# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - navigation [ref=e4]:
      - generic [ref=e5]:
        - img "homeIcon" [ref=e7] [cursor=pointer]
        - generic:
          - list [ref=e8]:
            - listitem [ref=e9]:
              - link "Home" [ref=e10] [cursor=pointer]:
                - /url: /posts/all
            - listitem [ref=e11]:
              - link "Login" [ref=e12] [cursor=pointer]:
                - /url: /users/login
          - list
  - generic [ref=e17]:
    - paragraph [ref=e18]: Sign in
    - textbox "Username or email" [active] [ref=e19]: admin@mail.com
    - textbox "Password" [ref=e20]
    - generic [ref=e21]:
      - checkbox [ref=e22]
      - text: Remember me
    - button "Sign in" [disabled] [ref=e23]
    - paragraph [ref=e24]:
      - text: Not a member?
      - link "Register" [ref=e25] [cursor=pointer]:
        - /url: /users/register
  - contentinfo [ref=e26]:
    - generic [ref=e28]:
      - generic [ref=e30]: "Version: 2020.3.2.4300"
      - generic [ref=e32]:
        - heading "Technologies:" [level=6] [ref=e33]
        - img "upnetix-title" [ref=e34]
        - img "upnetix-title" [ref=e35]
        - img "upnetix-title" [ref=e36]
```