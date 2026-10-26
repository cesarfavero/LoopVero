# `createHostAuthService/setCredential`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/auth/auth-service.ts` · [README do módulo](../../../../../../modules/host/extensions/auth/auth-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:499238-499241](../../../../../../../reference/runtime/host-main.cjs#L499238-L499241) | `ArrowFunctionExpression` | não | `credential` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499238-499241](../../../../../../../reference/runtime/host-main.cjs#L499238-L499241) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:499238

Chamadas escritas diretamente neste corpo: `store.getValidAccessToken`, `store.setCredential`.

Alvos de atribuição ou incremento: `wroteFirstCredential`.

SHA-256 do trecho: `576c9ac076e637fcc83c9d36480510ff626f025896084629e4135def1b426107`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
