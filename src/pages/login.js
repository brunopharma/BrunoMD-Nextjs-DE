import * as React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import styles from  '@/styles/login.module.css'

const LoginForm = () => {
    const [loginErrors, setLoginErrors] = React.useState()
    const [loginFields, setLoginFields] = React.useState({ email: '', password: '' })
    const [loginInProgress, setLoginInProgress] = React.useState(false)

    const router = useRouter()
    const handleSubmit = async event => {
        event.preventDefault()

        setLoginErrors(null)
        setLoginInProgress(true)
    }

    const disableLoginButton =
        loginFields.email === '' || loginFields.password === '' || loginInProgress

    return (
        <section className={styles.loginFormSection}>
            <h1 className={styles.loginHeader}>Login</h1>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <label for="email" className={styles.loginLabel}>
                        Indirizzo Email
                    </label>
                    <input
                        id="email"
                        className={styles.loginInput}
                        type="email"
                        value={loginFields.email}
                        onChange={event =>
                            setLoginFields(prevLoginFields => ({
                                ...prevLoginFields,
                                email: event.target.value,
                            }))
                        }
                        required
                    />

                    <label for="password" className={styles.loginLabel}>
                        Password
                    </label>
                    <input
                        id="password"
                        className={styles.loginInput}
                        type="password"
                        value={loginFields.password}
                        onChange={event =>
                            setLoginFields(prevLoginFields => ({
                                ...prevLoginFields,
                                password: event.target.value,
                            }))
                        }
                        required
                    />
                    {loginErrors && (
                        <div>
                            <p>{loginErrors[0].message}</p>
                        </div>
                    )}
                    <Link className={styles.secondaryCTA} href="/account/forgot-password">
                        Hai dimenticato la password?
                    </Link>
                    <div>
                        <button className={styles.loginButton} type="submit" disabled={disableLoginButton}>
                            ACCEDI
                        </button>
                    </div>
                    <Link className={styles.secondaryCTA} href="/account/register">
                        Crea un account
                    </Link>
                    <hr style={{ marginTop: '1rem' }} />
                    <div className={styles.secondaryCTA} style={{ textDecoration: 'none', paddingTop: '.5rem' }}>Hai bisogno di aiuto ad accedere all&apos; acquisto periodico?</div>
                    <Link className={styles.loginButton2} href="/tools/recurring/get-subscription-access">Gestisci l&apos;aquisto periodico</Link>
                </form>
        </section>
    )
}

export default LoginForm