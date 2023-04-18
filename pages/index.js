import styles from '../styles/Home.module.css'
import gsap from 'gsap';

const projects = [
    {
      title: "New York",
      color: "#F06318"
    },
    {
      title: "San Francisco",
      color: "#DCF018"
    },
    {
      title: "San Antonio",
      color: "#18F0E8"
    },
    {
      title: "Nashville",
      color: "#8C0CF0"
    },
    {
      title: "Houston",
      color: "#F0183C"
    },
    {
      title: "New Orleans",
      color: "#F0BA18"
    },
    {
      title: "Oklahoma City",
      color: "#0C34F0"
    },
    {
      title: "Detroit",
      color: "#0CBCF0"
    },
    {
      title: "Indianapolis",
      color: "#91F018"
    }
]

//https://anacuna.com/

export default function Home() {

  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {top: "-2vw", backgroundColor: projects[index].color, duration: 0.3})
  }

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {top: "0", backgroundColor: "white", duration: 0.3, delay: 0.1})
  }

  return (
    <div className={styles.container}>
        <div className={styles.projectContainer}>
            {
              projects.map( (project, index) => {
                return <div onMouseEnter={(e) => {manageMouseEnter(e, index)}} onMouseLeave={(e) => {manageMouseLeave(e, index)}} key={index}>
                  <p>{project.title}</p>
                </div>
              })
            }
        </div>
    </div>
  )
}
