import Router from 'next/router';
import { useEffect } from "react";

export default function ForumRedirect() {
    useEffect(() => {
        const {pathname} = Router
            Router.push('/kemtech-forum')
      }, []);

      return(
        <h1>
            Kemtech Forum
        </h1>
      )
}
