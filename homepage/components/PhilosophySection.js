import styles from '../styles/PhilosophySection.module.css'
import ScrollReveal from './ScrollReveal'

export default function PhilosophySection() {
  return (
    <section id="philosophy" className={styles.section}>
      <div className={styles.inner}>
        <ScrollReveal>
          <div className={styles.titleBlock}>
            <p className={styles.labelEn}>Philosophy</p>
            <h2 className={styles.heading}>考え方・哲学
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <div>
            {/* ↓ 自分の考え方・ポリシーを書いてください */}
            <p >
              {/* ゆるにたんの精神 */}
            </p>
            <p className={styles.body}>
              「個性」や「違い」を「対立」から「対話」へ。<br />完全に理解はできなくても、自分自身を知ることや他人を理解しようとする姿勢で、<br />
              世界は少し優しくなる気がしています。
              <br />
              そういった「ゆるっと人間探求」、通称「ゆるにたん」の精神を大事にしています。<br />
              これからは自分たちの価値観や美学が大事になる時代。
              <br />ぜひ、あなたのお話を聞かせてください！
              <br />
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
