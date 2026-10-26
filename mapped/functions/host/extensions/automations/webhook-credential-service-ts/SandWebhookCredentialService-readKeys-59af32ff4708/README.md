# `SandWebhookCredentialService.readKeys`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/webhook-credential-service.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/webhook-credential-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505835-505863](../../../../../../../reference/runtime/host-main.cjs#L505835-L505863) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505835-505863](../../../../../../../reference/runtime/host-main.cjs#L505835-L505863) | 6 | 0 | 2 | 7 | 0 | 2 |

### host:505835

Chamadas escritas diretamente neste corpo: `.toString`, `JSON.parse`, `errorLogTag`, `findSystemErrno`, `isRefusedSandDataFile`, `persistedWebhookKeysSchema.safeParse`, `readHostOwnedFile`, `this.deps.fs.readFile`, `this.log`.

Alvos de atribuição ou incremento: `raw`.

SHA-256 do trecho: `36b0be5c1e1b0808704d8e5709b0706e75e79c9f794b54af3553c61ea2d4d92e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
