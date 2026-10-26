# `buildSandDraftVerificationRiskTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-draft-verification-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755847-755869](../../../../../../reference/runtime/host-main.cjs#L755847-L755869) | `FunctionDeclaration` | não | `args` |
| [evaluation:541722-541744](../../../../../../reference/runtime/sand-eval-runner.cjs#L541722-L541744) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755847-755869](../../../../../../reference/runtime/host-main.cjs#L755847-L755869) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541722-541744](../../../../../../reference/runtime/sand-eval-runner.cjs#L541722-L541744) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755847

Chamadas escritas diretamente neste corpo: `.map`, `JSON.parse`, `JSON.stringify`, `Struct.fromJson`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `reviewedDraftReads`.

SHA-256 do trecho: `0d373b2293483476652262522f58f304ce6c976ae44838a0f3f0bc550a915443`.

### evaluation:541722

Chamadas escritas diretamente neste corpo: `.map`, `JSON.parse`, `JSON.stringify`, `Struct.fromJson`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `reviewedDraftReads`.

SHA-256 do trecho: `0d373b2293483476652262522f58f304ce6c976ae44838a0f3f0bc550a915443`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
