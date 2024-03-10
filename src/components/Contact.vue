<template>
  <div class="contact-container">
    <h2>Contact</h2>
    <div class="contact-cards">
      <Card
        title="Email"
        :link="mailToLink"
        link-description="Envoyez-moi un email"
      >
        <template #icon>
          <EmailIcon class="contact-icon" />
        </template>
      </Card>
      <Card
        title="LinkedIn"
        :link="linkedinLink"
        link-description="Visitez mon profil LinkedIn"
      >
        <template #icon>
          <LinkedinIcon class="contact-icon" />
        </template>
      </Card>
      <Card
        title="GitHub"
        :link="githubLink"
        link-description="Consultez mon GitHub"
      >
        <template #icon>
          <GithubIcon class="contact-icon" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "./helpers/Card.vue";
import EmailIcon from "./icons/IconEmail.vue";
import LinkedinIcon from "./icons/IconLinkedin.vue";
import GithubIcon from "./icons/IconGithub.vue";

export default {
  name: "Contact",
  components: {
    Card,
    EmailIcon,
    LinkedinIcon,
    GithubIcon,
  },
  data() {
    return {
      linkedinLink: "https://www.linkedin.com/in/andy-malonda/",
      githubLink: "https://github.com/AndyMalonda",
      mailToLink: "mailto:andy.malonda1@gmail.com",
    };
  },
};
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.contact-cards {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
}

.contact-icon {
  width: 2rem;
  height: 2rem;
  color: var(--color-heading);
}

@media (max-width: 768px) {
  .contact-cards {
    flex-direction: column;
  }
}
</style>
