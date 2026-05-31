# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assertions.spec.ts >> Verify page Open login
- Location: tests\Assertions.spec.ts:3:6

# Error details

```
Error: expect(locator).toBeDisabled() failed

Locator:  getByRole('textbox', { name: 'Search for Products, Brands and More' })
Expected: disabled
Received: enabled
Timeout:  5000ms

Call log:
  - Expect "soft toBeDisabled" with timeout 5000ms
  - waiting for getByRole('textbox', { name: 'Search for Products, Brands and More' })
    8 × locator resolved to <input name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn25" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/>
      - unexpected value "enabled"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link "Image Image" [ref=e37] [cursor=pointer]:
            - /url: /flights-travel-uhp-at-store?marketplace=FKT
            - img "Image" [ref=e40]
            - img "Image" [ref=e43]
        - generic [ref=e53]:
          - generic [ref=e54]:
            - img [ref=e55]
            - generic [ref=e58]: Location not set
          - generic [ref=e60]:
            - generic [ref=e61]: Select delivery location
            - img [ref=e62]
      - banner [ref=e70]:
        - generic [ref=e74]:
          - button "Search for Products, Brands and More" [ref=e75] [cursor=pointer]:
            - img "Search Icon" [ref=e76]
          - textbox "Search for Products, Brands and More" [ref=e80]: Mobile
        - generic [ref=e81]:
          - generic [ref=e84]:
            - generic [ref=e86]:
              - link "Login" [ref=e87] [cursor=pointer]:
                - /url: /account/login?ret=/
                - img "Login" [ref=e88]
                - generic [ref=e89]: Login
              - img "Chevron" [ref=e90]
            - link "Login" [ref=e94] [cursor=pointer]:
              - /url: /account/login?ret=/
          - generic [ref=e99]:
            - link "More" [ref=e100] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e101]: More
            - img "Chevron" [ref=e102]
          - link "Cart Cart" [ref=e105] [cursor=pointer]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e106]
            - generic [ref=e107]: Cart
      - generic [ref=e109]:
        - link "For You" [ref=e114] [cursor=pointer]:
          - /url: https://www.flipkart.com/
          - generic [ref=e116]:
            - img [ref=e119]
            - generic [ref=e120]: For You
        - link "Fashion" [ref=e125] [cursor=pointer]:
          - /url: /aw-base-new-inline-2025-at-store
          - generic [ref=e127]:
            - img [ref=e130]
            - generic [ref=e131]: Fashion
        - link "Mobiles" [ref=e136] [cursor=pointer]:
          - /url: /mobile-phones-sasa-lele-2026-ab-inline-at-store
          - generic [ref=e138]:
            - img [ref=e141]
            - generic [ref=e142]: Mobiles
        - link "Beauty" [ref=e147] [cursor=pointer]:
          - /url: /bpc-bau-new-inline-at-store
          - generic [ref=e149]:
            - img [ref=e152]
            - generic [ref=e153]: Beauty
        - link "Electronics" [ref=e158] [cursor=pointer]:
          - /url: /new-elec-clp-march-at-store
          - generic [ref=e160]:
            - img [ref=e163]
            - generic [ref=e164]: Electronics
        - link "Home" [ref=e169] [cursor=pointer]:
          - /url: /home-kitchen-25-at-store
          - generic [ref=e171]:
            - img [ref=e174]
            - generic [ref=e175]: Home
        - link "Appliances" [ref=e180] [cursor=pointer]:
          - /url: /tv-and-appliances-inline-ab-at-store
          - generic [ref=e182]:
            - img [ref=e185]
            - generic [ref=e186]: Appliances
        - link "Toys, baby.." [ref=e191] [cursor=pointer]:
          - /url: /toys-baby-2025-new-at-store
          - generic [ref=e193]:
            - img [ref=e196]
            - generic [ref=e197]: Toys, baby..
        - link "Food & Health" [ref=e202] [cursor=pointer]:
          - /url: /fnhc-2025-new-at-store
          - generic [ref=e204]:
            - img [ref=e207]
            - generic [ref=e208]: Food & Health
        - link "Auto Accessories" [ref=e213] [cursor=pointer]:
          - /url: /aa-2025-new-at-store
          - generic [ref=e215]:
            - img [ref=e218]
            - generic [ref=e219]: Auto Accessories
        - link "2 Wheelers" [ref=e224] [cursor=pointer]:
          - /url: /twowheelers-at-store
          - generic [ref=e226]:
            - img [ref=e229]
            - generic [ref=e230]: 2 Wheelers
        - link "Sports & Fitness" [ref=e235] [cursor=pointer]:
          - /url: /sf-inline-2025-at-store
          - generic [ref=e237]:
            - img [ref=e240]
            - generic [ref=e241]: Sports & Fitness
        - link "Books & Media" [ref=e246] [cursor=pointer]:
          - /url: /booksmedia-2025-at-store
          - generic [ref=e248]:
            - img [ref=e251]
            - generic [ref=e252]: Books & Media
        - link "Furniture" [ref=e257] [cursor=pointer]:
          - /url: /india-ka-furniture-studio-inlines-at-store
          - generic [ref=e259]:
            - img [ref=e262]
            - generic [ref=e263]: Furniture
    - generic [ref=e271]:
      - generic [ref=e286]:
        - link "Image" [ref=e293] [cursor=pointer]:
          - /url: /womens-ethnic-sets/pr?sid=clo%2Ccfv%2Citg%2Ctys&p%5B%5D=facets.price_range.from%3D249&p%5B%5D=facets.price_range.to%3DMax&param=5678&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=AGMFI2SB4WMY_IAD&BU=Mixed
          - img "Image" [ref=e296]
        - link "Image" [ref=e303] [cursor=pointer]:
          - /url: /wearable-smart-devices/~cs-ean86xyypb/pr?sid=ajy&collection-tab-name=Exchange+Deals+on+Smartwatches&sort=price_asc&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&param=4671&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=5J314AM8PIQG_IAD&BU=Mixed
          - img "Image" [ref=e306]
        - link "Image" [ref=e313] [cursor=pointer]:
          - /url: /food-products/~cs-sjdl6qiqph/pr?sid=eat&collection-tab-name=Happilo&pageCriteria=default&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=P3CCZH4SH4Y3_AD&BU=Mixed
          - img "Image" [ref=e316]
        - link "Image" [ref=e323] [cursor=pointer]:
          - /url: /1mt/~cs-wzwyjgrhfh/pr?sid=1mt&collection-tab-name=Auto+Accessories&pageCriteria=default&param=43829&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=R5FW8GBSQEX8_IAD&BU=Mixed
          - img "Image" [ref=e326]
        - link "Image" [ref=e333] [cursor=pointer]:
          - /url: /footwear/mens-footwear/pr?sid=osp%2Ccil&sort=popularity&p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2Bmore&p%5B%5D=facets.brand%255B%255D%3DRED%2BCHIEF&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=3CVVQ8B0X8BG_AD&BU=Mixed
          - img "Image" [ref=e336]
        - link "Image" [ref=e343] [cursor=pointer]:
          - /url: /poco-x8-pro-charger-box-white-256-gb/p/itmabdb890182fb1?pid=MOBHMGG5QFZXHVAH&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=KAXWP38O8PQK_AD&BU=Mixed
          - img "Image" [ref=e346]
      - generic [ref=e365]:
        - link "Image" [ref=e370] [cursor=pointer]:
          - /url: /g9b/~cs-fli9d0rbpn/pr?sid=g9b&collection-tab-name=Lakme+Sunscreen&pageCriteria=default&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ZIO112Y86XJU_AD&BU=Mixed
          - img "Image" [ref=e373]
        - link "Image" [ref=e378] [cursor=pointer]:
          - /url: /g9b/~cs-lm7ar0nmsu/pr?sid=g9b&collection-tab-name=HA+pure&sort=price_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=IZESJGOBRVA5_AD&BU=Mixed
          - img "Image" [ref=e381]
        - link "Image" [ref=e386] [cursor=pointer]:
          - /url: /electronics-event-days-at-ads-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=OAMC5MN1CE1B_AD&BU=Mixed
          - img "Image" [ref=e389]
      - generic [ref=e399]:
        - generic [ref=e403]:
          - img "Image" [ref=e406]
          - generic [ref=e410]: Interesting finds
        - generic [ref=e413]:
          - link "Image boAt, realme, Mivi & more Min 50% Off" [ref=e418] [cursor=pointer]:
            - /url: /audio-video/pr?sid=0pm&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&hpid=w2BGimYwATZXfn_vEkn1oap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4gNTAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkFDQ0g5TTdOM1pSWUtIQTMiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJCZXN0IE9mIEhlYWRwaG9uZXMgJiBTcGVha2VycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e428]
            - generic [ref=e431]:
              - generic [ref=e432]: boAt, realme, Mivi & more
              - generic [ref=e433]: Min 50% Off
          - link "Image Grab Now! Min.70% Off" [ref=e438] [cursor=pointer]:
            - /url: /clothing-and-accessories/pr?sid=clo&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&param=3454&p%5B%5D=facets.brand%255B%255D%3DMARKS%2B%2526%2BSPENCER&param=8966&hpid=nUT-mKtjsqG3qHE7Qrj7K6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uNzAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlBBTkZaV0ZWQUVXR0pSQloiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNQVJLUyAmIFNQRU5DRVIiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e448]
            - generic [ref=e451]:
              - generic [ref=e452]: Grab Now!
              - generic [ref=e453]: Min.70% Off
          - link "Image Overfly Min. 50% Off" [ref=e458] [cursor=pointer]:
            - /url: /watches/wrist-watches/pr?sid=r18%2Cf13&p%5B%5D=facets.movement%255B%255D%3DMechanical%2BAutomatic&sort=price_asc&p%5B%5D=facets.brand%255B%255D%3DOVERFLY&p%5B%5D=facets.brand%255B%255D%3DOVERFLY%2BBIDEN&p%5B%5D=facets.brand%255B%255D%3DOVERFLY%2BOCHSTIN&p%5B%5D=facets.brand%255B%255D%3DOVERFLY%2BOLEVS&p%5B%5D=facets.brand%255B%255D%3DOVERFLY%2BPOEDAGAR&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&hpid=KR_mPi8MGgI1xhD9GEXmdKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDUwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJXQVRIRFhYQUg4N1dLUlJFIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiTWVjaGFuaWNhbCBBdXRvbWF0aWMgV2F0Y2hlcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e468]
            - generic [ref=e471]:
              - generic [ref=e472]: Overfly
              - generic [ref=e473]: Min. 50% Off
          - link "Image Get It Now Flat ₹299" [ref=e478] [cursor=pointer]:
            - /url: /womens-footwear/~womens-sandals/pr?sid=osp%2Ciko&p%5B%5D=facets.brand%255B%255D%3DKhadim%2527s&p%5B%5D=facets.brand%255B%255D%3DSHOETOPIA&p%5B%5D=facets.brand%255B%255D%3DDOCTOR%2BEXTRA%2BSOFT&p%5B%5D=facets.brand%255B%255D%3DTRASE&p%5B%5D=facets.brand%255B%255D%3DMarc%2BLoire&p%5B%5D=facets.brand%255B%255D%3DLayasa&p%5B%5D=facets.brand%255B%255D%3DLongwalk&p%5B%5D=facets.brand%255B%255D%3DMoonwalk&p%5B%5D=facets.brand%255B%255D%3DZapatoz&p%5B%5D=facets.brand%255B%255D%3DDeals4you&p%5B%5D=facets.brand%255B%255D%3DDenill&p%5B%5D=facets.brand%255B%255D%3DNeemans&p%5B%5D=facets.brand%255B%255D%3DShezone&p%5B%5D=facets.brand%255B%255D%3DVokline&p%5B%5D=facets.brand%255B%255D%3DVENDOZ&p%5B%5D=facets.brand%255B%255D%3DWELCOME&p%5B%5D=facets.brand%255B%255D%3DSvaar&p%5B%5D=facets.brand%255B%255D%3DPaduki&p%5B%5D=facets.brand%255B%255D%3DShoestail&p%5B%5D=facets.brand%255B%255D%3DTOSHINA%2BSHOES%2BKING&p%5B%5D=facets.brand%255B%255D%3DTWINSSHOE&p%5B%5D=facets.brand%255B%255D%3DEVOK&p%5B%5D=facets.brand%255B%255D%3DKoburg&p%5B%5D=facets.brand%255B%255D%3DFAUSTO&p%5B%5D=facets.brand%255B%255D%3Daadi&p%5B%5D=facets.brand%255B%255D%3DBirde&p%5B%5D=facets.brand%255B%255D%3DK%2527%2BFootlance&p%5B%5D=facets.brand%255B%255D%3DK-Footlance&p%5B%5D=facets.brand%255B%255D%3DPicktoes&p%5B%5D=facets.brand%255B%255D%3DPinkToes&p%5B%5D=facets.brand%255B%255D%3DPicktoe&p%5B%5D=facets.brand%255B%255D%3DSK%2BFashion&p%5B%5D=facets.brand%255B%255D%3DXE%2BLooks&p%5B%5D=facets.brand%255B%255D%3DBambam&p%5B%5D=facets.brand%255B%255D%3DBERSACHE&p%5B%5D=facets.brand%255B%255D%3DFabbmate&p%5B%5D=facets.brand%255B%255D%3DEL%2BPASO&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D299&param=5678&hpid=Qh_q8RTSMcztlmJcVm1MMKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGbGF0IOKCuTI5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlNOREdYR1MyVFVXTVhGU0MiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJXb21lbiBTYW5kYWxzIEZsYXQg4oK5Mjk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e488]
            - generic [ref=e491]:
              - generic [ref=e492]: Get It Now
              - generic [ref=e493]: Flat ₹299
      - generic [ref=e503]:
        - generic [ref=e507]:
          - img "Image" [ref=e510]
          - generic [ref=e512]:
            - generic [ref=e514]: Home Decor & Furnishing
            - link [ref=e515] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_2~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e518]
        - generic [ref=e523]:
          - link "Image Appliance Covers Min. 50% Off" [ref=e528] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-4b08408bf6a1039bba42174a54d352b4/pr?sid=jra,ixy,hqs&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e538]
            - generic [ref=e541]:
              - generic [ref=e542]: Appliance Covers
              - generic [ref=e543]: Min. 50% Off
          - link "Image Key Holders Min. 50% Off" [ref=e548] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-a808c7af79dac1cca11dce04f7de4698/pr?sid=arb,a77,8js&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e558]
            - generic [ref=e561]:
              - generic [ref=e562]: Key Holders
              - generic [ref=e563]: Min. 50% Off
          - link "Image Wall Clocks Min. 50% Off" [ref=e568] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-0082a75b990faa4b37ade0f4f850e2af/pr?sid=arb,kjw,bm1&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e578]
            - generic [ref=e581]:
              - generic [ref=e582]: Wall Clocks
              - generic [ref=e583]: Min. 50% Off
          - link "Image Mosquito Nets Min. 50% Off" [ref=e588] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-c78b4ec8e16ed557c9a8a8da7fa4d261/pr?sid=jra,knw,i6y&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e598]
            - generic [ref=e601]:
              - generic [ref=e602]: Mosquito Nets
              - generic [ref=e603]: Min. 50% Off
      - generic [ref=e613]:
        - generic [ref=e617]: Brands in Spotlight
        - generic [ref=e619]:
          - link "Image" [ref=e624] [cursor=pointer]:
            - /url: /clothing-and-accessories/topwear/pr?sid=clo%2Cash&p%5B%5D=facets.discount_range_v1%255B%255D%3D70%2525%2Bor%2Bmore&p%5B%5D=facets.brand%255B%255D%3DTHE%2BBEAR%2BHOUSE&p%5B%5D=facets.ideal_for%255B%255D%3DMen&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=77RJ4P8LW4IP_AD&BU=Mixed
            - img "Image" [ref=e627]
          - link "Image" [ref=e632] [cursor=pointer]:
            - /url: /mens-footwear/pr?sid=osp%2Ccil&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&p%5B%5D=facets.brand%255B%255D%3DADIDAS&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=VJSURK6QFQDA_AD&BU=Mixed
            - img "Image" [ref=e635]
          - link "Image" [ref=e640] [cursor=pointer]:
            - /url: /footwear/~cs-jtqi6yx3q7/pr?sid=osp&collection-tab-name=Action&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=IPAFFNNIOMS7_AD&BU=Mixed
            - img "Image" [ref=e643]
      - generic [ref=e655]:
        - link "Image" [ref=e660] [cursor=pointer]:
          - /url: /triggr-arcus-one-60h-battery-4-mic-enc-dual-pairing-rubber-grip-13mm-drivers-v6-0-bluetooth/p/itmcaf717e45f345?pid=SMWHGSCYUFCHVVZE&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=YHDTWJ5U652J_AD&BU=Mixed
          - img "Image" [ref=e663]
        - link "Image" [ref=e668] [cursor=pointer]:
          - /url: /triggr-arcus-one-60h-battery-4-mic-enc-dual-pairing-rubber-grip-13mm-drivers-v6-0-bluetooth/p/itmcaf717e45f345?pid=ACCGWU2ABQ3EAUM8&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=848B4KJ234CF_AD&BU=Mixed
          - img "Image" [ref=e671]
        - link "Image" [ref=e676] [cursor=pointer]:
          - /url: /wearable-smart-devices/smart-watches/~cs-b60pi9z7s5/pr?sid=ajy%2Cbuh&collection-tab-name=fireboltt&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=LQUBRN9DEF3B_AD&BU=Mixed
          - img "Image" [ref=e679]
      - generic [ref=e689]:
        - generic [ref=e693]:
          - img "Image" [ref=e696]
          - generic [ref=e698]:
            - generic [ref=e700]: Best Value Deals on Fashion
            - link [ref=e701] [cursor=pointer]:
              - /url: /offers-list/best-value-deals-on-fashion?screen=dynamic&pk=contentTags%3DGCD_THEME_8~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e704]
        - generic [ref=e709]:
          - link "Image Men’s Slippers & Flip Flops Min. 70% Off" [ref=e714] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-79e42ad52149a075d0a3b31f35294baa/pr?sid=osp,cil,e1r&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e724]
            - generic [ref=e727]:
              - generic [ref=e728]: Men’s Slippers & Flip Flops
              - generic [ref=e729]: Min. 70% Off
          - link "Image Women's Tops Min. 50% Off" [ref=e734] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-9c0a24bc92cf992c289e03eb97dbdb95/pr?sid=clo,ash,ohw,36j&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e744]
            - generic [ref=e747]:
              - generic [ref=e748]: Women's Tops
              - generic [ref=e749]: Min. 50% Off
          - link "Image Women's Sarees Bestsellers" [ref=e754] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-3bd49a8c44c9ba23a9d223ecf7511e45/pr?sid=clo,8on,zpd,9og&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e764]
            - generic [ref=e767]:
              - generic [ref=e768]: Women's Sarees
              - generic [ref=e769]: Bestsellers
          - link "Image Women's Dresses Min. 50% Off" [ref=e774] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-13bd5b42739beb9a7637634e7c0e82d4/pr?sid=clo,odx,maj,jhy&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e784]
            - generic [ref=e787]:
              - generic [ref=e788]: Women's Dresses
              - generic [ref=e789]: Min. 50% Off
      - generic [ref=e799]:
        - generic [ref=e803]:
          - img "Image" [ref=e806]
          - generic [ref=e808]:
            - generic [ref=e810]: Appliance for Cool Summer
            - link [ref=e811] [cursor=pointer]:
              - /url: /offers-list/appliance-for-cool-summer?screen=dynamic&pk=contentTags%3DGCD_THEME_1~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e814]
        - generic [ref=e819]:
          - link "Image True Wireless Min. 50% Off" [ref=e824] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6ef68bc8d283b86730515a8f2c87ff23/pr?sid=0pm,fcn,821,a7x,2si&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e834]
            - generic [ref=e837]:
              - generic [ref=e838]: True Wireless
              - generic [ref=e839]: Min. 50% Off
          - link "Image Smart Watches Min. 40% Off" [ref=e844] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-21e789349087c946d1b57cb0a6372ff1/pr?sid=ajy,buh&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e854]
            - generic [ref=e857]:
              - generic [ref=e858]: Smart Watches
              - generic [ref=e859]: Min. 40% Off
          - link "Image Wireless Headphones Min. 50% Off" [ref=e864] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-023e2d44ef3841dd1c64187b87292b2d/pr?sid=0pm,fcn,gc3,ka8&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e874]
            - generic [ref=e877]:
              - generic [ref=e878]: Wireless Headphones
              - generic [ref=e879]: Min. 50% Off
          - link "Image Security Cameras Min. 50% Off" [ref=e884] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-f766ab37f7cb15a909ea5fe94d98ac75/pr?sid=igc,j69,agd&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e894]
            - generic [ref=e897]:
              - generic [ref=e898]: Security Cameras
              - generic [ref=e899]: Min. 50% Off
      - generic [ref=e909]:
        - generic [ref=e913]:
          - img "Image" [ref=e916]
          - generic [ref=e918]:
            - generic [ref=e920]: Make your home stylish
            - link [ref=e921] [cursor=pointer]:
              - /url: /offers-list/make-your-home-stylish?screen=dynamic&pk=contentTags%3DGCD_THEME_9~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
              - img [ref=e924]
        - generic [ref=e929]:
          - link "Image Mop Set Widest Range" [ref=e934] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-a28ee99c2f6654fc9b94d140dd6dbcf0/pr?sid=rja,z2d,ivx&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e944]
            - generic [ref=e947]:
              - generic [ref=e948]: Mop Set
              - generic [ref=e949]: Widest Range
          - link "Image Pressure Cookers Special offer" [ref=e954] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-c5fdb4ded091e3e9197967def66601c0/pr?sid=upp,tnx,gsl&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e964]
            - generic [ref=e967]:
              - generic [ref=e968]: Pressure Cookers
              - generic [ref=e969]: Special offer
          - link "Image Water Bottles & Flasks Special offer" [ref=e974] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-724b150da313d7ea87b6f1f69a302235/pr?sid=upp,3t7&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e984]
            - generic [ref=e987]:
              - generic [ref=e988]: Water Bottles & Flasks
              - generic [ref=e989]: Special offer
          - link "Image Kitchen Racks Trending" [ref=e994] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-1bb8f057dcd6dec497938025ba988998/pr?sid=upp,5ix,tlu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1004]
            - generic [ref=e1007]:
              - generic [ref=e1008]: Kitchen Racks
              - generic [ref=e1009]: Trending
      - generic [ref=e1022]:
        - link "Image For GenZ" [ref=e1027] [cursor=pointer]:
          - /url: /spoyl-ff-store?param=0986&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZvciBHZW5aIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
          - img "Image" [ref=e1030]
          - generic [ref=e1031]: For GenZ
        - link "Image Flipkart Pay" [ref=e1036] [cursor=pointer]:
          - /url: /flipkart-pay-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZsaXBrYXJ0IFBheSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
          - img "Image" [ref=e1039]
          - generic [ref=e1040]: Flipkart Pay
        - link "Image Originals" [ref=e1045] [cursor=pointer]:
          - /url: /flipkart-originals-large-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk9yaWdpbmFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
          - img "Image" [ref=e1048]
          - generic [ref=e1049]: Originals
        - link "Image Gift Cards" [ref=e1054] [cursor=pointer]:
          - /url: /gift-card-at-store?param=7654567&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdpZnQgQ2FyZHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
          - img "Image" [ref=e1057]
          - generic [ref=e1058]: Gift Cards
        - link "Image BLACK" [ref=e1063] [cursor=pointer]:
          - /url: /flipkart-black-store?param=389440&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkJMQUNLIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
          - img "Image" [ref=e1066]
          - generic [ref=e1067]: BLACK
        - link "Image SuperCoin" [ref=e1072] [cursor=pointer]:
          - /url: /supercoin?param=76523&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlN1cGVyQ29pbiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
          - img "Image" [ref=e1075]
          - generic [ref=e1076]: SuperCoin
        - link "Image Next-Gen" [ref=e1081] [cursor=pointer]:
          - /url: /next-gen-brands-store?param=098124&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk5leHQtR2VuIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
          - img "Image" [ref=e1084]
          - generic [ref=e1085]: Next-Gen
      - generic [ref=e1089]: Hang on, loading content
      - generic [ref=e1101]:
        - generic [ref=e1102]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1103]: +
      - contentinfo [ref=e1104]:
        - generic [ref=e1106]:
          - generic [ref=e1107]:
            - generic [ref=e1108]:
              - generic [ref=e1109]: ABOUT
              - link "Contact Us" [ref=e1110] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1111] [cursor=pointer]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1112] [cursor=pointer]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1113] [cursor=pointer]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1114] [cursor=pointer]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1115] [cursor=pointer]:
                - /url: /corporate-information
            - generic [ref=e1116]:
              - generic [ref=e1117]: GROUP COMPANIES
              - link "Myntra" [ref=e1118] [cursor=pointer]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1119] [cursor=pointer]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1120] [cursor=pointer]:
                - /url: https://www.shopsy.in
            - generic [ref=e1121]:
              - generic [ref=e1122]: HELP
              - link "Payments" [ref=e1123] [cursor=pointer]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1124] [cursor=pointer]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1125] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1126] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1127]:
              - generic [ref=e1128]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1129] [cursor=pointer]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1130] [cursor=pointer]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1131] [cursor=pointer]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1132] [cursor=pointer]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1133] [cursor=pointer]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1134] [cursor=pointer]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1135] [cursor=pointer]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1136] [cursor=pointer]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1137]:
              - generic [ref=e1138]: "Mail Us:"
              - generic [ref=e1139]:
                - paragraph [ref=e1140]: Flipkart Internet Private Limited,
                - paragraph [ref=e1141]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1142]: Clove Embassy Tech Village,
                - paragraph [ref=e1143]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1144]: Bengaluru, 560103,
                - paragraph [ref=e1145]: Karnataka, India
              - generic [ref=e1146]: "Social:"
              - generic [ref=e1147]:
                - link "Facebook" [ref=e1149] [cursor=pointer]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1150]
                - link "Twitter" [ref=e1152] [cursor=pointer]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1153]
                - link "YouTube" [ref=e1155] [cursor=pointer]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1156]
                - link "Instagram" [ref=e1158] [cursor=pointer]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1159]
            - generic [ref=e1160]:
              - generic [ref=e1161]: "Registered Office Address:"
              - generic [ref=e1162]:
                - paragraph [ref=e1163]: Flipkart Internet Private Limited,
                - paragraph [ref=e1164]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1165]: Clove Embassy Tech Village,
                - paragraph [ref=e1166]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1167]: Bengaluru, 560103,
                - paragraph [ref=e1168]: Karnataka, India
                - paragraph [ref=e1169]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1170]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1171] [cursor=pointer]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1172] [cursor=pointer]:
                    - /url: tel:044-67415800
          - generic [ref=e1173]:
            - generic [ref=e1174]:
              - img "Become a Seller" [ref=e1175]
              - link "Become a Seller" [ref=e1176] [cursor=pointer]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1177]:
              - img "Advertise" [ref=e1178]
              - generic "Advertise" [ref=e1179]
            - generic [ref=e1180]:
              - img "Gift Cards" [ref=e1181]
              - link "Gift Cards" [ref=e1182] [cursor=pointer]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1183]:
              - img "Help Center" [ref=e1184]
              - link "Help Center" [ref=e1185] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1186]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
  - generic [ref=e1188]:
    - button "✕" [ref=e1189] [cursor=pointer]
    - generic [ref=e1191]:
      - generic [ref=e1192]:
        - text: Login
        - paragraph [ref=e1193]: Get access to your Orders, Wishlist and Recommendations
      - generic [ref=e1196]:
        - generic [ref=e1197]:
          - textbox [ref=e1198]
          - generic: Enter Email/Mobile number
        - generic [ref=e1199]:
          - text: By continuing, you agree to Flipkart's
          - link "Terms of Use" [ref=e1200] [cursor=pointer]:
            - /url: /pages/terms
          - text: and
          - link "Privacy Policy" [ref=e1201] [cursor=pointer]:
            - /url: /pages/privacypolicy
          - text: .
        - button "Request OTP" [ref=e1203] [cursor=pointer]
        - link "New to Flipkart? Create an account" [ref=e1205] [cursor=pointer]:
          - /url: /account/login?signup=true
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test.only("Verify page Open login",async({page})=>{
  4  | 
  5  | //await page.goto("https://playwright.dev/docs/intro");
  6  | 
  7  | await page.goto("https://www.flipkart.com/")
  8  | 
  9  | console.log("Title",await page.url())
  10 | 
  11 | await expect(page).toHaveURL("https://www.flipkart.com/")
  12 | 
  13 | 
  14 | await expect.soft(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")
  15 | 
  16 | const searchbox=page.getByRole('textbox', { name: 'Search for Products, Brands and More' })
  17 |  
  18 | await expect.soft(searchbox).toBeVisible()
  19 | await expect.soft(searchbox).toBeEnabled()
  20 | await expect.soft(searchbox).toBeEditable()
> 21 | await expect.soft(searchbox).toBeDisabled()
     |                              ^ Error: expect(locator).toBeDisabled() failed
  22 | 
  23 | await page.getByRole('textbox', { name: 'Search for Products, Brands and More' }).fill("Mobile");
  24 | 
  25 | 
  26 | await page.keyboard.press("Enter")
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | 
  34 | })
```