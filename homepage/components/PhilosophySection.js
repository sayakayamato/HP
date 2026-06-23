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
              変わり続ける世界のなかで、<br />
              私たちは変わらないものに目を向けます。<br /><br />

              人の価値観や信念。<br />
              人生を形づくる物語。<br />
              人と人との関係性。<br />
              時代を超えて受け継がれる文化や美意識。<br /><br />

              私たちは対話と探求を通じて、<br />
              その奥にある本質に触れようとします。<br /><br />

              答えを決めつけるのではなく、<br />
              問い続けること。<br /><br />

              それが、私たちの探求であり価値提供です。<br />
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
