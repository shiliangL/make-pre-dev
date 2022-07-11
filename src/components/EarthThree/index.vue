<!--
 * @Author: shiliangL
 * @Date: 2022-07-04 09:51:14
 * @LastEditTime: 2022-07-11 08:48:06
 * @LastEditors: Do not edit
 * @Description:
-->

<script>

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import Stats from 'three/examples/jsm/libs/stats.module';

export default {
  name: 'EarthThree',
  mounted () {
    this.initThree()
  },
  methods: {
    initThree () {
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('.webgl'),
        antialias: true
      })

      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.shadowMap.enabled = true
      renderer.toneMapping = THREE.CineonToneMapping

      const scene = new THREE.Scene()
      const frustumSize = 96
      const aspect = window.innerWidth / window.innerHeight
      const camera = new THREE.OrthographicCamera(-frustumSize * aspect, frustumSize * aspect, frustumSize, -frustumSize, 1, 1000)
      camera.position.set(0, 20, 200)
      camera.lookAt(new THREE.Vector3(0, 0, 0))

      const earth = new THREE.Group()
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true

      const resize = () => {
        // const canvasSize = renderer.getSize(new THREE.Vector2())
        const windowSize = new THREE.Vector2(window.innerWidth, window.innerHeight)
        if (windowSize) {
          console.log(resize, '=resize=')
          // camera.aspect = windowSize.x / windowSize.y
          camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
          // renderer.setSize(windowSize.x, windowSize.y, false)
          renderer.setSize(window.innerWidth, window.innerHeight)
        }
      }

      window.addEventListener('resize', () => {
        resize()
      }, false)

      const light = new THREE.DirectionalLight(0xffffff, 1)
      light.intensity = 1.2
      light.position.set(-10, 10, 5)
      light.castShadow = true
      light.target = earth
      light.shadow.mapSize.width = 512
      light.shadow.mapSize.height = 512
      light.shadow.camera.top = 10
      light.shadow.camera.bottom = -5
      light.shadow.camera.left = -5
      light.shadow.camera.right = 10
      scene.add(light)

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
      scene.add(ambientLight)

      // 🌏
      const textLoader = new THREE.TextureLoader()
      const planet = new THREE.Mesh(new THREE.SphereGeometry(10, 64, 64), new THREE.MeshStandardMaterial({
        map: textLoader.load(require('@/components/EarthThree/images/earth_basic.jpeg')),
        normalMap: textLoader.load(require('@/components/EarthThree/images/earth_normal.jpeg')),
        roughnessMap: textLoader.load(require('@/components/EarthThree/images/earth_rough.jpeg')),
        normalScale: new THREE.Vector2(10, 10),
        metalness: 0.1
      }))
      planet.rotation.y = -Math.PI
      const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(10.6, 64, 64), new THREE.MeshLambertMaterial({
        alphaMap: textLoader.load(require('@/components/EarthThree/images/clouds.jpeg')),
        transparent: true,
        opacity: 0.4,
        depthTest: true
      }))
      earth.add(planet)
      earth.add(atmosphere)
      earth.scale.set(6, 6, 6)
      scene.add(earth)

      const animate = () => {
        // resize()
        requestAnimationFrame(animate)
        earth && (earth.rotation.y += 0.002)
        atmosphere && (atmosphere.rotation.y += 0.004)
        atmosphere && (atmosphere.rotation.x += 0.002)
        // stats && stats.update();
        controls && controls.update()
        renderer.render(scene, camera)
      }
      animate()
    }
  },
  render (h) {
    return h('canvas', { class: 'webgl' })
  }
}
</script>
