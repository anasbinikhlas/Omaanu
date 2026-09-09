import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Layers, 
  PhoneCall,
  Activity,
  Globe,
  Sliders,
  BarChart3,
  Users,
  Shield,
  Send
} from 'lucide-react'
import { systems, subscriptionBenefits } from '../data/systems'
import './Saas.css'

export default function Saas() {
  const [selectedCat, setSelectedCat] = useState('All')
  const canvasRef = useRef(null)

  const categories = ['All', ...new Set(systems.map(s => s.category))]

  const filteredSystems = selectedCat === 'All'
    ? systems
    : systems.filter(s => s.category === selectedCat)

  const getWhatsAppLink = (message) => {
    return `https://wa.me/923392103555?text=${encodeURIComponent(message)}`
  }

  // ── Optimized High-Performance WebGL Scene with Ascend Motion & Omaanu Colors ──
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // 1. Scene & Camera
    const scene = new THREE.Scene()
    // Transparent / Deep Omaanu Navy background
    scene.background = new THREE.Color(0x040914)

    let width = window.innerWidth
    let height = window.innerHeight

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 200)
    camera.position.set(0, 0, 8)
    scene.add(camera)

    // 2. High performance single-pass WebGL Renderer (No heavy triple full-viewport bloom composers)
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
    renderer.setSize(width, height)
    if ('outputColorSpace' in renderer) {
      renderer.outputColorSpace = THREE.SRGBColorSpace
    }

    // 3. Lighting matching Omaanu Theme (Electric Cyan & Royal Blue)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6)
    scene.add(ambientLight)

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.1)
    sunLight.position.set(-6, 5, 4)
    scene.add(sunLight)

    const cyanRimLight = new THREE.DirectionalLight(0x00b4d8, 2.2)
    cyanRimLight.position.set(6, -2, -3)
    scene.add(cyanRimLight)

    // 4. Scene Hierarchy & Groups
    const worldGroup = new THREE.Group()
    scene.add(worldGroup)

    const planetGroup = new THREE.Group()
    planetGroup.rotation.z = 0.37
    worldGroup.add(planetGroup)

    const cloudGroup = new THREE.Group()
    cloudGroup.rotation.z = 0.37
    cloudGroup.visible = false
    worldGroup.add(cloudGroup)

    // Ascend Choreography Stops
    const STOPS_X = [{ p: 0, v: 0 }, { p: 0.32, v: -3.1 }, { p: 0.64, v: 3.2 }, { p: 1, v: 0 }]
    const STOPS_Y = [{ p: 0, v: -4.5 }, { p: 0.32, v: 0.55 }, { p: 0.64, v: 0.45 }, { p: 1, v: 0.15 }]
    const STOPS_S = [{ p: 0, v: 2.15 }, { p: 0.32, v: 1.0 }, { p: 0.64, v: 0.92 }, { p: 1, v: 1.12 }]

    const lerp = (a, b, t) => a + (b - a) * t
    const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi)
    function sample(stops, p) {
      if (p <= stops[0].p) return stops[0].v
      if (p >= stops[stops.length - 1].p) return stops[stops.length - 1].v
      for (let i = 0; i < stops.length - 1; i++) {
        const s0 = stops[i], s1 = stops[i + 1]
        if (p >= s0.p && p <= s1.p) {
          let t = (p - s0.p) / (s1.p - s0.p)
          t = t * t * (3.0 - 2.0 * t) // smoothstep
          return lerp(s0.v, s1.v, t)
        }
      }
      return stops[stops.length - 1].v
    }

    worldGroup.position.set(STOPS_X[0].v, STOPS_Y[0].v, 0)
    worldGroup.scale.setScalar(STOPS_S[0].v)

    // 5. Shared Simplex Noise (GLSL)
    const SNOISE = `
      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      float snoise(vec3 v){
        const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + 1.0 * C.xxx; vec3 x2 = x0 - i2 + 2.0 * C.xxx; vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
        i = mod(i, 289.0);
        vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        float n_ = 1.0/7.0; vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
        vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ *ns.x + ns.yyyy; vec4 y = y_ *ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy,h.x); vec3 p1 = vec3(a0.zw,h.y); vec3 p2 = vec3(a1.xy,h.z); vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }
    `

    // 6. Atmosphere Halo Glow (Billboard Plane with Omaanu Cyan Color)
    const glowGeom = new THREE.PlaneGeometry(2, 2)
    const glowMat = new THREE.ShaderMaterial({
      uniforms: {
        uGlow: { value: new THREE.Color(0x00b4d8) },
        uIntensity: { value: 3.4 }
      },
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `
        uniform vec3 uGlow; uniform float uIntensity; varying vec2 vUv;
        void main(){
          float d = length(vUv - 0.5) * 2.0;
          float a = pow(clamp(1.0 - d, 0.0, 1.0), 2.2);
          gl_FragColor = vec4(uGlow * a * uIntensity, a);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
    const glowMesh = new THREE.Mesh(glowGeom, glowMat)
    glowMesh.scale.setScalar(1.95 * 2.3)
    worldGroup.add(glowMesh)

    // 7. Twinkling Starfield (Uniform Sphere r=90)
    const starCount = 800
    const starGeom = new THREE.BufferGeometry()
    const starPos = new Float32Array(starCount * 3)
    const starSeed = new Float32Array(starCount)
    const starBright = new Float32Array(starCount)
    for (let i = 0; i < starCount; i++) {
      const u = Math.random(), v = Math.random()
      const theta = u * 2.0 * Math.PI, phi = Math.acos(2.0 * v - 1.0)
      const r = 90.0
      const sinPhi = Math.sin(phi)
      starPos[i * 3] = r * sinPhi * Math.cos(theta)
      starPos[i * 3 + 1] = r * sinPhi * Math.sin(theta)
      starPos[i * 3 + 2] = r * Math.cos(phi)
      starSeed[i] = Math.random() * 100.0
      starBright[i] = 0.35 + Math.random() * 0.65
    }
    starGeom.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
    starGeom.setAttribute('seed', new THREE.BufferAttribute(starSeed, 1))
    starGeom.setAttribute('bright', new THREE.BufferAttribute(starBright, 1))

    const starMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 1.6 },
        uFlicker: { value: 1.0 },
        uColor: { value: new THREE.Color(0x90e0ef) },
        uRes: { value: new THREE.Vector2(width, height) }
      },
      vertexShader: `
        attribute float seed; attribute float bright;
        uniform float uTime; uniform float uSize; uniform float uFlicker; uniform vec2 uRes;
        varying float vTw;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          float tw = 0.6 + 0.4 * sin(uTime * uFlicker + seed);
          vTw = bright * tw;
          gl_PointSize = max(uSize * uRes.y / 900.0 * (90.0 / max(-mv.z, 1.0)), 1.0);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor; varying float vTw;
        void main(){
          vec2 p = gl_PointCoord - 0.5; float l = length(p); if (l > 0.5) discard;
          float core = smoothstep(0.5, 0.0, l);
          gl_FragColor = vec4(uColor, core * vTw);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      frustumCulled: false,
      blending: THREE.AdditiveBlending
    })
    const starMesh = new THREE.Points(starGeom, starMat)
    scene.add(starMesh)

    // 8. Ambient Atmosphere Motes
    const moteCount = 180
    const moteGeom = new THREE.BufferGeometry()
    const motePos = new Float32Array(moteCount * 3)
    const moteSize = new Float32Array(moteCount)
    const moteSeed = new Float32Array(moteCount)
    for (let i = 0; i < moteCount; i++) {
      motePos[i * 3] = Math.random() * 2.0 - 1.0
      motePos[i * 3 + 1] = Math.random() * 2.0 - 1.0
      motePos[i * 3 + 2] = Math.random() * 2.0 - 1.0
      moteSize[i] = 18.0 * (0.4 + Math.random())
      moteSeed[i] = Math.random() * 100.0
    }
    moteGeom.setAttribute('position', new THREE.BufferAttribute(motePos, 3))
    moteGeom.setAttribute('size', new THREE.BufferAttribute(moteSize, 1))
    moteGeom.setAttribute('seed', new THREE.BufferAttribute(moteSeed, 1))

    const moteMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(0x64b5f6) },
        uRes: { value: new THREE.Vector2(width, height) }
      },
      vertexShader: `
        attribute float size; attribute float seed; uniform float uTime; uniform vec2 uRes;
        varying float vA;
        vec3 warp(vec3 p, float t){ float c=0.9,a=1.9,b=0.02,s=0.05; p*=2.;
          p.x+=c*sin(s*t+a*p.y)+t*b; p.y+=c*cos(s*t+a*p.x); p.y+=c*sin(s*t+a*p.z)+t*b;
          p.z+=c*cos(s*t+a*p.y); p.z+=c*sin(s*t+a*p.x)+t*b; p.x+=c*cos(s*t+a*p.z);
          return cos(p+vec3(1,2,4)); }
        void main(){
          vec3 v = position*4.0 + warp(position, uTime)*1.2;
          vec4 mv = modelViewMatrix * vec4(v, 1.0);
          float r = length(v); float farF = 1.0 - smoothstep(5.0, 6.5, r); float nearF = smoothstep(0.0, 0.5, -mv.z);
          vA = farF * nearF;
          gl_PointSize = size * uRes.y / 900.0 / -mv.z; gl_PointSize = max(gl_PointSize, 1.0);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor; varying float vA;
        void main(){ vec2 p = gl_PointCoord - 0.5; float l = length(p); if (l > 0.5) discard;
          float tex = smoothstep(0.5, 0.0, l); gl_FragColor = vec4(uColor * tex, tex * vA * 0.55); }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending
    })
    const motesMesh = new THREE.Points(moteGeom, moteMat)
    scene.add(motesMesh)

    // 9. Assets & GLTF Loading
    const ASSET_BASE = 'https://api.getlayers.ai/storage/v1/object/public/public/assets/ascend-d9857ad1f2'
    const PLANET_GLB = `${ASSET_BASE}/planet.glb`
    const PLANET_LIGHTS_GLB = `${ASSET_BASE}/planet-lights.glb`
    const PLANET_CLOUDS_PNG = `${ASSET_BASE}/planet-clouds.png`

    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.5/')
    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)

    let planetMesh = null
    let markerMat = null
    let entranceStartTime = null
    const ENTRY_DUR = 1.9
    const ENTRY_START_Y = -6.5

    let planetTime = 0
    let cloudTime = 0
    let starTime = 0
    let markerTime = 0
    let curP = 0
    let curX = STOPS_X[0].v
    let curY = STOPS_Y[0].v
    let curS = STOPS_S[0].v
    let spinPhase = 0

    // Cloud Shells (2 optimized layers with Omaanu blue lighting)
    const cloudTex = new THREE.TextureLoader().load(PLANET_CLOUDS_PNG)
    cloudTex.wrapS = THREE.RepeatWrapping
    cloudTex.wrapT = THREE.RepeatWrapping
    cloudTex.repeat.set(5, 5)

    const cloudDefs = [
      { h: 1.008, o: 0.55, s: 0.06, ry: 0.0, phase: 0.0 },
      { h: 1.035, o: 0.45, s: 0.12, ry: 2.2, phase: 13.0 },
    ]

    const cloudMeshes = cloudDefs.map(layer => {
      const geom = new THREE.SphereGeometry(1.95 * layer.h, 48, 48)
      const mat = new THREE.MeshStandardMaterial({
        map: cloudTex,
        transparent: true,
        depthWrite: false
      })

      mat.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = { get value() { return cloudTime; } }
        shader.uniforms.noiseScale = { value: 20.0 }
        shader.uniforms.uOpacity = { value: layer.o }
        shader.uniforms.uPhase = { value: layer.phase }

        shader.vertexShader = `varying vec2 vCloudUv;\n` + shader.vertexShader.replace(
          'void main() {',
          'void main() {\n  vCloudUv = uv;'
        )

        shader.fragmentShader = `
          varying vec2 vCloudUv;
          uniform float uTime;
          uniform float noiseScale;
          uniform float uOpacity;
          uniform float uPhase;
          ${SNOISE}
        \n` + shader.fragmentShader.replace(
          '#include <dithering_fragment>',
          `#include <dithering_fragment>
          gl_FragColor.rgb = vec3(0.92, 0.96, 1.0);
          float cloudNoise = snoise(vec3(vCloudUv.x * noiseScale + uTime + uPhase, vCloudUv.y * noiseScale - uTime * 2.0 + uPhase, uTime * 2.0 + uPhase));
          float cloudNdv = max(dot(normalize(vNormal), normalize(vViewPosition)), 0.0);
          float cloudEdge = pow(1.0 - cloudNdv, 3.0);
          float cloudMod = mix(cloudNoise, 1.0, cloudEdge);
          float cloudNdl = dot(normalize(vNormal), normalize(vec3(-0.9, 0.18, 0.4)));
          float cloudDay = 1.0 - smoothstep(0.30, -0.30, cloudNdl) * 0.9;
          gl_FragColor.a *= cloudMod * uOpacity * cloudDay;`
        )
      }

      const mesh = new THREE.Mesh(geom, mat)
      mesh.rotation.y = layer.ry
      mesh.renderOrder = 2
      cloudGroup.add(mesh)
      return { mesh, spin: layer.s }
    })

    // Land Radar Pings
    function buildLandMarkers(mesh, baseTexture) {
      if (!baseTexture || !baseTexture.image) return

      const img = baseTexture.image
      const cvs = document.createElement('canvas')
      cvs.width = img.width || 1024
      cvs.height = img.height || 512
      const ctx = cvs.getContext('2d')
      ctx.drawImage(img, 0, 0, cvs.width, cvs.height)
      const data = ctx.getImageData(0, 0, cvs.width, cvs.height).data

      const geom = mesh.geometry
      const posAttr = geom.attributes.position
      const uvAttr = geom.attributes.uv
      const idxAttr = geom.index
      const triCount = idxAttr ? idxAttr.count / 3 : posAttr.count / 3

      const areas = new Float32Array(triCount)
      const vA = new THREE.Vector3(), vB = new THREE.Vector3(), vC = new THREE.Vector3()
      const e1 = new THREE.Vector3(), e2 = new THREE.Vector3()

      let totalArea = 0
      for (let i = 0; i < triCount; i++) {
        const i0 = idxAttr ? idxAttr.getX(i * 3) : i * 3
        const i1 = idxAttr ? idxAttr.getX(i * 3 + 1) : i * 3 + 1
        const i2 = idxAttr ? idxAttr.getX(i * 3 + 2) : i * 3 + 2

        vA.fromBufferAttribute(posAttr, i0)
        vB.fromBufferAttribute(posAttr, i1)
        vC.fromBufferAttribute(posAttr, i2)

        e1.subVectors(vB, vA)
        e2.subVectors(vC, vA)
        totalArea += e1.cross(e2).length() * 0.5
        areas[i] = totalArea
      }

      function pickTriangle(val) {
        let l = 0, r = triCount - 1
        while (l < r) {
          const m = (l + r) >> 1
          if (areas[m] < val) l = m + 1
          else r = m
        }
        return l
      }

      const points = []
      const seeds = []
      const uv0 = new THREE.Vector2(), uv1 = new THREE.Vector2(), uv2 = new THREE.Vector2()
      let tries = 0

      while (points.length / 3 < 50 && tries < 4500) {
        tries++
        const target = Math.random() * totalArea
        const tIdx = pickTriangle(target)

        const i0 = idxAttr ? idxAttr.getX(tIdx * 3) : tIdx * 3
        const i1 = idxAttr ? idxAttr.getX(tIdx * 3 + 1) : tIdx * 3 + 1
        const i2 = idxAttr ? idxAttr.getX(tIdx * 3 + 2) : tIdx * 3 + 2

        let r1 = Math.random(), r2 = Math.random()
        if (r1 + r2 > 1.0) {
          r1 = 1.0 - r1
          r2 = 1.0 - r2
        }
        const r0 = 1.0 - r1 - r2

        uv0.fromBufferAttribute(uvAttr, i0)
        uv1.fromBufferAttribute(uvAttr, i1)
        uv2.fromBufferAttribute(uvAttr, i2)

        const u = r0 * uv0.x + r1 * uv1.x + r2 * uv2.x
        const v = r0 * uv0.y + r1 * uv1.y + r2 * uv2.y

        const px = Math.floor(((u % 1.0 + 1.0) % 1.0) * (cvs.width - 1))
        const py = Math.floor((1.0 - ((v % 1.0 + 1.0) % 1.0)) * (cvs.height - 1))
        const pIndex = (py * cvs.width + px) * 4

        const cr = data[pIndex]
        const cg = data[pIndex + 1]
        const cb = data[pIndex + 2]

        // Reject ocean
        if (cb > cr + 6 && cb > cg + 6) continue

        vA.fromBufferAttribute(posAttr, i0)
        vB.fromBufferAttribute(posAttr, i1)
        vC.fromBufferAttribute(posAttr, i2)

        const pos = new THREE.Vector3()
          .addScaledVector(vA, r0)
          .addScaledVector(vB, r1)
          .addScaledVector(vC, r2)

        pos.multiplyScalar(1.012)
        points.push(pos.x, pos.y, pos.z)
        seeds.push(Math.random() * 100.0)
      }

      const mGeom = new THREE.BufferGeometry()
      mGeom.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))
      mGeom.setAttribute('seed', new THREE.Float32BufferAttribute(seeds, 1))

      markerMat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: new THREE.Color(0x38bdf8) }, // Electric cyan marker
          uSize: { value: 16.0 },
          uSpeed: { value: 0.5 },
          uRes: { value: new THREE.Vector2(width, height) }
        },
        vertexShader: `
          attribute float seed; uniform float uSize; uniform vec2 uRes;
          varying float vSeed; varying float vFade;
          void main(){
            vSeed = seed;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vec3 vn = normalize(normalMatrix * normalize(position));
            vec3 vd = normalize(-mv.xyz);
            vFade = smoothstep(0.15, 0.5, dot(vn, vd));
            gl_PointSize = max(uSize * uRes.y / 900.0 * (7.0 / max(-mv.z, 1.0)), 2.0);
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          uniform vec3 uColor; uniform float uTime; uniform float uSpeed;
          varying float vSeed; varying float vFade;
          void main(){
            if (vFade <= 0.001) discard;
            vec2 p = gl_PointCoord - 0.5;
            float d = length(p) * 2.0;
            if (d > 1.0) discard;
            float core = smoothstep(0.30, 0.0, d) * 1.3;
            float ph = fract(uTime * 0.55 + vSeed);
            float ring = smoothstep(0.08, 0.0, abs(d - ph)) * (1.0 - ph);
            gl_FragColor = vec4(uColor, clamp(core + ring, 0.0, 1.0) * vFade);
          }
        `,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })

      const markerCloud = new THREE.Points(mGeom, markerMat)
      mesh.add(markerCloud)
    }

    // Load Earth & Night Lights GLTF
    gltfLoader.load(PLANET_LIGHTS_GLB, (lightsGltf) => {
      let nightTex = null
      lightsGltf.scene.traverse((child) => {
        if (child.isMesh && child.material && child.material.map && !nightTex) {
          nightTex = child.material.map
          if ('colorSpace' in nightTex) {
            nightTex.colorSpace = THREE.SRGBColorSpace
          }
        }
      })

      gltfLoader.load(PLANET_GLB, (planetGltf) => {
        planetGltf.scene.traverse((child) => {
          if (child.isMesh && !planetMesh) planetMesh = child
        })

        if (planetMesh) {
          planetMesh.geometry.computeBoundingSphere()
          const r = planetMesh.geometry.boundingSphere.radius
          planetMesh.scale.setScalar(1.95 / r)

          const baseMat = planetMesh.material.clone()
          baseMat.metalness = 0.1
          baseMat.roughness = 0.9

          baseMat.onBeforeCompile = (shader) => {
            shader.uniforms.time = { get value() { return planetTime; } }
            // Omaanu Electric Cyan Rim
            shader.uniforms.rimColor = { value: new THREE.Color(0x00b4d8) }
            shader.uniforms.rimPower = { value: 2.3 }
            shader.uniforms.nightBlendTexture = { value: nightTex }
            shader.uniforms.nightLights = { value: 9.0 }
            shader.uniforms.terrainDepth = { value: 0.3 }
            shader.uniforms.terrainShade = { value: 1.25 }
            shader.uniforms.oceanGlint = { value: 0.4 }

            shader.vertexShader = `varying vec2 vCustomUv;\n` + shader.vertexShader.replace(
              'void main() {',
              'void main() {\n  vCustomUv = uv;'
            )

            shader.fragmentShader = `
              #extension GL_OES_standard_derivatives : enable
              varying vec2 vCustomUv;
              uniform float time;
              uniform vec3 rimColor;
              uniform float rimPower;
              uniform sampler2D nightBlendTexture;
              uniform float nightLights;
              uniform float terrainDepth;
              uniform float terrainShade;
              uniform float oceanGlint;
              ${SNOISE}
            \n` + shader.fragmentShader.replace(
              '#include <dithering_fragment>',
              `#include <dithering_fragment>
              vec3 normalizedNormal = normalize(vNormal);
              vec3 viewDir = normalize(vViewPosition);
              float rim = 1.0 - max(dot(viewDir, normalizedNormal), 0.0);
              rim = pow(rim, rimPower); rim = pow(rim, 1.5) * 0.7;
              vec3 currentColor = gl_FragColor.rgb;
              float blueDom = currentColor.b - max(currentColor.r, currentColor.g);
              float waterMask = clamp(smoothstep(-0.005, 0.03, blueDom), 0.0, 1.0);
              float shimmer = snoise(vec3(vCustomUv.x * 30.0 + time * 1.5, vCustomUv.y * 30.0 - time * 2.0, time * 2.5));
              gl_FragColor.rgb += waterMask * shimmer * 0.025;
              vec3 finalColor = mix(gl_FragColor.rgb, rimColor, rim);
              gl_FragColor = vec4(finalColor, 1.0);
              vec3 surfPos = -vViewPosition;
              float terrH = dot(texture2D(map, vCustomUv).rgb, vec3(0.299, 0.587, 0.114));
              vec3 sigX = dFdx(surfPos), sigY = dFdy(surfPos);
              vec3 vR1 = cross(sigY, normalizedNormal), vR2 = cross(normalizedNormal, sigX);
              float fDet = dot(sigX, vR1);
              vec3 vGrad = sign(fDet) * (dFdx(terrH) * vR1 + dFdy(terrH) * vR2);
              vec3 bumpedNormal = normalize(abs(fDet) * normalizedNormal - terrainDepth * vGrad);
              vec3 shadeNormal = mix(bumpedNormal, normalizedNormal, waterMask);
              vec3 cityLights = texture2D(nightBlendTexture, vCustomUv).rgb * gl_FragColor.rgb * nightLights;
              vec3 viewSunDir = normalize(vec3(-0.9, 0.18, 0.4));
              float ndl = dot(normalizedNormal, viewSunDir);
              float dayAmt = smoothstep(-0.05, 0.35, ndl);
              float relief = dot(shadeNormal, viewSunDir) - ndl;
              gl_FragColor.rgb *= clamp(1.0 + relief * terrainShade * dayAmt, 0.55, 1.6);
              float nightFactor  = smoothstep(0.18, -0.30, ndl);
              float lightsFactor = smoothstep(0.30, -0.35, ndl);
              gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * 0.08, nightFactor);
              gl_FragColor.rgb += cityLights * lightsFactor;
              vec3 halfDir = normalize(viewSunDir + viewDir);
              float ripple = snoise(vec3(vCustomUv * 240.0, time * 4.0));
              float ndh = max(dot(normalizedNormal, halfDir) + ripple * 0.02, 0.0);
              float glint = pow(ndh, 140.0);
              gl_FragColor.rgb += glint * waterMask * dayAmt * oceanGlint * vec3(1.0, 0.97, 0.88);`
            )
          }

          planetMesh.material = baseMat
          planetGroup.add(planetMesh)

          if (baseMat.map) {
            if (baseMat.map.image && baseMat.map.image.complete !== false) {
              buildLandMarkers(planetMesh, baseMat.map)
            } else {
              baseMat.map.addEventListener('load', () => buildLandMarkers(planetMesh, baseMat.map))
            }
          }

          cloudGroup.visible = true
          entranceStartTime = performance.now() * 0.001
        }
      })
    })

    // 10. Scroll & Stagger Reveal Observer
    const revealElems = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' })
    revealElems.forEach(el => observer.observe(el))

    // 11. Animation & Scroll Loop
    let animId = null
    let lastTime = performance.now()

    function animate(now) {
      animId = requestAnimationFrame(animate)
      const dt = Math.min((now - lastTime) * 0.001, 0.05)
      lastTime = now

      planetTime += dt / 12.0
      cloudTime += dt / 20.0
      starTime += dt
      markerTime += dt

      starMat.uniforms.uTime.value = starTime
      if (markerMat) markerMat.uniforms.uTime.value = markerTime

      // Spin cloud shells
      cloudMeshes.forEach(item => {
        item.mesh.rotation.y += dt * item.spin
      })

      // Ascend Scroll Choreography
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const pTarget = clamp(window.scrollY / maxScroll, 0, 1)
      curP += (pTarget - curP) * Math.min(1, dt * 4.5)

      const sideScale = clamp(window.innerWidth / 1200.0, 0.5, 1.0)
      const targetX = sample(STOPS_X, curP) * sideScale
      const targetY = sample(STOPS_Y, curP)
      const targetS = sample(STOPS_S, curP)

      curX += (targetX - curX) * Math.min(1, dt * 3.2)
      curY += (targetY - curY) * Math.min(1, dt * 3.2)
      curS += (targetS - curS) * Math.min(1, dt * 3.2)

      // Signature one-time float-up entrance
      let entryY = 0
      if (entranceStartTime !== null) {
        const elapsed = (now * 0.001) - entranceStartTime
        const t = clamp(elapsed / ENTRY_DUR, 0, 1)
        const ease = 1.0 - Math.pow(1.0 - t, 3.0)
        entryY = ENTRY_START_Y * (1.0 - ease)
      }

      worldGroup.position.set(curX, curY + entryY, 0)
      worldGroup.scale.setScalar(curS)

      planetGroup.rotation.y = 2.07 + spinPhase + curP * Math.PI * 1.6
      spinPhase += dt * 0.03

      // Billboard orientation and motes position
      glowMesh.quaternion.copy(camera.quaternion)
      motesMesh.position.copy(camera.position)
      moteMat.uniforms.uTime.value = now * 0.001 * 0.8 * 8.0

      renderer.render(scene, camera)
    }

    animId = requestAnimationFrame(animate)

    // Resize
    const onResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
      starMat.uniforms.uRes.value.set(width, height)
      moteMat.uniforms.uRes.value.set(width, height)
      if (markerMat) markerMat.uniforms.uRes.value.set(width, height)
    }
    window.addEventListener('resize', onResize)

    return () => {
      if (animId) cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      observer.disconnect()

      // Comprehensive WebGL memory & resource cleanup
      try {
        dracoLoader.dispose()
        glowGeom.dispose()
        glowMat.dispose()
        starGeom.dispose()
        starMat.dispose()
        moteGeom.dispose()
        moteMat.dispose()
        cloudTex.dispose()
        cloudMeshes.forEach(item => {
          if (item.mesh.geometry) item.mesh.geometry.dispose()
          if (item.mesh.material) item.mesh.material.dispose()
        })
        if (planetMesh) {
          if (planetMesh.geometry) planetMesh.geometry.dispose()
          if (planetMesh.material) {
            if (planetMesh.material.map) planetMesh.material.map.dispose()
            planetMesh.material.dispose()
          }
        }
        if (markerMat) markerMat.dispose()
      } catch (e) {
        // Safe disposal fallback
      }

      renderer.dispose()
    }
  }, [])

  return (
    <div className="saas2-theme-wrapper">
      {/* Fixed Full-Viewport Three.js Planet Canvas */}
      <canvas ref={canvasRef} className="planet-canvas" />

      <div className="page" id="top">
        {/* ── SECTION 1 · HERO ── */}
        <header className="hero">
          <div className="hero-inner">
            <h1 className="hero-title" data-reveal style={{ '--rd': '60ms' }}>
              Scale Smarter,<br />Not <em>Harder</em>
            </h1>
            <p className="hero-sub" data-reveal style={{ '--rd': '180ms' }}>
              Drive your operations forward with turnkey cloud subscription systems, real-time analytics, and seamless workflows — all engineered under Omaanu's proven digital infrastructure.
            </p>
            <div className="hero-actions" data-reveal style={{ '--rd': '300ms' }}>
              <a 
                href={getWhatsAppLink("Hi Omaanu, I want to start with your turnkey cloud software right now.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Start Free Right Now</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a 
                href={getWhatsAppLink("Hi Omaanu, I would like to schedule a software consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Schedule a Consult
              </a>
            </div>
          </div>

          <div className="logos" data-reveal style={{ '--rd': '420ms' }}>
            <div className="logos-label">Trusted by fast-moving teams across Pakistan, UAE &amp; UK</div>
            <div className="logos-row">
              <span className="logo">Nimbus</span>
              <span className="logo">Pluma</span>
              <span className="logo">Citrus</span>
              <span className="logo">Spider</span>
              <span className="logo">Helod</span>
              <span className="logo">Vertx</span>
            </div>
          </div>
        </header>

        {/* ── SECTION 2 · FEATURES ── */}
        <section className="section features" id="features">
          <div className="section-head">
            <span className="eyebrow" data-reveal style={{ '--rd': '0ms' }}>Everything in orbit</span>
            <h2 data-reveal style={{ '--rd': '80ms' }}>One platform to run the entire revenue engine</h2>
            <p data-reveal style={{ '--rd': '160ms' }}>
              Stop stitching fragmented tools together. Omaanu SaaS unifies capture, automation, and insight into a single surface your whole team actually enjoys using.
            </p>
          </div>

          <div className="feature-grid">
            {/* Card 1: Workflow */}
            <div className="card" data-reveal style={{ '--rd': '0ms' }}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="6" height="6" rx="1.5"></rect>
                  <rect x="15" y="15" width="6" height="6" rx="1.5"></rect>
                  <path d="M6 9v3a3 3 0 0 0 3 3h3"></path>
                </svg>
              </div>
              <h3>Clever workflows</h3>
              <p>Automate every hand-off with visual, branching pipelines that move operations forward while you sleep.</p>
            </div>

            {/* Card 2: Analytics */}
            <div className="card" data-reveal style={{ '--rd': '90ms' }}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19V5"></path>
                  <path d="M4 19h16"></path>
                  <path d="M8 16v-4"></path>
                  <path d="M13 16V8"></path>
                  <path d="M18 16v-7"></path>
                </svg>
              </div>
              <h3>Live analytics</h3>
              <p>Real-time dashboards turn raw operational data into the one clear number that tells you what to do next.</p>
            </div>

            {/* Card 3: Leads */}
            <div className="card" data-reveal style={{ '--rd': '180ms' }}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Seamless leads</h3>
              <p>Capture, score, and route every customer inquiry automatically — no spreadsheet, no leak, no lag.</p>
            </div>

            {/* Card 4: Bolt */}
            <div className="card" data-reveal style={{ '--rd': '270ms' }}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"></path>
                </svg>
              </div>
              <h3>Instant triggers</h3>
              <p>Fire actions across your business stack the moment intent appears, in milliseconds not minutes.</p>
            </div>

            {/* Card 5: Shield */}
            <div className="card" data-reveal style={{ '--rd': '360ms' }}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3>Enterprise-grade</h3>
              <p>Granular staff roles, automated backups, and bank-grade SSL baked in — security that scales quietly.</p>
            </div>

            {/* Card 6: Globe */}
            <div className="card" data-reveal style={{ '--rd': '450ms' }}>
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"></path>
                </svg>
              </div>
              <h3>Global by default</h3>
              <p>Multi-region cloud, multi-currency support, and low latency everywhere your customers happen to be.</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 · SHOWCASE + STATS ── */}
        <section className="section showcase" id="solutions">
          <div className="showcase-grid">
            <div className="showcase-copy">
              <span className="eyebrow" data-reveal>Built for momentum</span>
              <h2 data-reveal style={{ '--rd': '90ms' }}>See the whole business move in real time</h2>
              <p data-reveal style={{ '--rd': '180ms' }}>
                Every stage, every order, every dollar — rendered live. Omaanu SaaS gives founders the altitude to spot bottlenecks and the controls to double down immediately.
              </p>
              <div className="showcase-actions" data-reveal style={{ '--rd': '270ms' }}>
                <a href="#systems-catalog" className="btn btn-primary">
                  <span>Explore available systems</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Dashboard Mock */}
            <div className="dashboard" data-reveal style={{ '--rd': '160ms' }}>
              <div className="dash-top">
                <h4>Pipeline &amp; Velocity · Q3</h4>
                <div className="dash-live">
                  <span className="dash-dot"></span>
                  <span>Live</span>
                </div>
              </div>
              <div className="dash-bars">
                <div className="dash-bar" style={{ '--h': '62%', '--i': 0 }}></div>
                <div className="dash-bar" style={{ '--h': '88%', '--i': 1 }}></div>
                <div className="dash-bar" style={{ '--h': '47%', '--i': 2 }}></div>
                <div className="dash-bar" style={{ '--h': '95%', '--i': 3 }}></div>
                <div className="dash-bar" style={{ '--h': '71%', '--i': 4 }}></div>
                <div className="dash-bar" style={{ '--h': '80%', '--i': 5 }}></div>
                <div className="dash-bar" style={{ '--h': '58%', '--i': 6 }}></div>
              </div>
              <div className="dash-rows">
                <div className="dash-row">
                  <span>New inquiries 90%</span>
                  <div className="dash-track"><div className="dash-fill" style={{ '--w': '90%', '--d': '300ms' }}></div></div>
                </div>
                <div className="dash-row">
                  <span>Qualified 72%</span>
                  <div className="dash-track"><div className="dash-fill" style={{ '--w': '72%', '--d': '390ms' }}></div></div>
                </div>
                <div className="dash-row">
                  <span>In processing 48%</span>
                  <div className="dash-track"><div className="dash-fill" style={{ '--w': '48%', '--d': '480ms' }}></div></div>
                </div>
                <div className="dash-row">
                  <span>Completed 34%</span>
                  <div className="dash-track"><div className="dash-fill" style={{ '--w': '34%', '--d': '570ms' }}></div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats">
            <div className="stat" data-reveal style={{ '--rd': '0ms' }}>
              <div className="stat-value">3.4×</div>
              <div className="stat-label">Faster workflow execution</div>
            </div>
            <div className="stat" data-reveal style={{ '--rd': '80ms' }}>
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Cloud infrastructure uptime</div>
            </div>
            <div className="stat" data-reveal style={{ '--rd': '160ms' }}>
              <div className="stat-value">24h</div>
              <div className="stat-label">Turnkey system deployment</div>
            </div>
            <div className="stat" data-reveal style={{ '--rd': '240ms' }}>
              <div className="stat-value">Zero</div>
              <div className="stat-label">Server maintenance overhead</div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4 · READY SYSTEMS CATALOG (Integrated Omaanu Product Suites) ── */}
        <section className="section catalog-section" id="systems-catalog">
          <div className="section-head">
            <span className="eyebrow" data-reveal style={{ '--rd': '0ms' }}>Turnkey Deployments</span>
            <h2 data-reveal style={{ '--rd': '80ms' }}>Explore Ready-To-Launch Systems</h2>
            <p data-reveal style={{ '--rd': '160ms' }}>
              Specialized cloud systems pre-configured for instant onboarding. Tap WhatsApp to connect directly with our technical deployment lead.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="saas2-filter-bar" data-reveal style={{ '--rd': '100ms' }}>
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                className={`saas2-filter-btn ${selectedCat === cat ? 'active' : ''}`}
                onClick={() => setSelectedCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Systems Grid */}
          <div className="feature-grid saas2-systems-grid">
            {filteredSystems.map((sys, idx) => (
              <div key={sys.id} className="card saas2-suite-card" data-reveal style={{ '--rd': `${(idx % 3) * 100}ms` }}>
                <div className="card-top-row">
                  <span className="suite-badge-cat">{sys.category}</span>
                  <span className="suite-badge-tag">{sys.badge}</span>
                </div>

                <div className="card-icon suite-icon">
                  <span>{sys.icon}</span>
                </div>

                <h3>{sys.name}</h3>
                <p className="suite-tagline">{sys.tagline}</p>
                <p className="suite-desc">{sys.description}</p>

                <div className="suite-features-list">
                  {sys.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="suite-feat-row">
                      <CheckCircle2 size={15} className="feat-check-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="suite-footer">
                  <div className="suite-price-info">
                    <span className="suite-price-label">License:</span>
                    <span className="suite-price-val">{sys.pricingModel}</span>
                  </div>
                  <a
                    href={getWhatsAppLink(sys.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Inquire on WhatsApp</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 5 · CTA CARD ── */}
        <section className="section cta" id="cta">
          <div className="cta-card">
            <span className="eyebrow" data-reveal style={{ '--rd': '60ms' }}>Ready when you are</span>
            <h2 data-reveal style={{ '--rd': '140ms' }}>Put your operations on a new trajectory</h2>
            <p data-reveal style={{ '--rd': '220ms' }}>
              Launch in minutes. Zero upfront dev bottlenecks. Cancel anytime. Connect directly with our team to configure your cloud workspace.
            </p>
            <div className="hero-actions" data-reveal style={{ '--rd': '300ms' }}>
              <a 
                href={getWhatsAppLink("Hi Omaanu, I'm ready to launch my subscription system.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Start Free Right Now</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <Link to="/contact" className="btn btn-outline">
                Talk to Solutions Expert
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
