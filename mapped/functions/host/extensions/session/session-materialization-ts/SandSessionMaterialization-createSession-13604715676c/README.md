# `SandSessionMaterialization.createSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-materialization.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-materialization-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721449-721454](../../../../../../../reference/runtime/host-main.cjs#L721449-L721454) | `method` | sim | `profile, origin = "user", options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721449-721454](../../../../../../../reference/runtime/host-main.cjs#L721449-L721454) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:721449

Chamadas escritas diretamente neste corpo: `this.mintAgent`.

SHA-256 do trecho: `4462ad2b61d2fa54f9cf4f6e32dd8ca21dbe1f5f68ac8d5db075199fe867cd0f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
