import AdmissionComponent from '@/components/AdmissionComponent'
import Question from '@/components/Question'

const AdmissionPage = () => {
  return (
    <div>
      <AdmissionComponent />

      {/* To be redirected to contact page */}
      <Question />
    </div>
  )
}

export default AdmissionPage