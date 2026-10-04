<script setup lang="ts">
import { ReferenceDataListView } from '@/reference-data'
import { useReligionConfig } from '../config'

const config = useReligionConfig()
</script>

<template>
  <div class="p-4 md:p-6 lg:p-8">
    <ReferenceDataListView :config="config" />
  </div>
</template>
