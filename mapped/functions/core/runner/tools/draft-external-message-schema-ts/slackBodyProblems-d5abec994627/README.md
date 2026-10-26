# `slackBodyProblems`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-external-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755111-755137](../../../../../../../reference/runtime/host-main.cjs#L755111-L755137) | `FunctionDeclaration` | não | `body` |
| [evaluation:539736-539762](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539736-L539762) | `FunctionDeclaration` | não | `body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755111-755137](../../../../../../../reference/runtime/host-main.cjs#L755111-L755137) | 8 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:539736-539762](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539736-L539762) | 8 | 1 | 0 | 1 | 0 | 0 |

### host:755111

Chamadas escritas diretamente neste corpo: `.trimEnd`, `/\s/.test`, `FENCE_AFTER_TEXT.exec`, `FENCE_OPENING.exec`, `SLACK_BULLET.test`, `SLACK_LINK.test`, `body.split`, `line.replace`, `line.trim`, `new Set`, `opening[computed].includes`, `opening[computed].startsWith`, `opening[computed].trim`, `problems.add`, `readFenceLine`.

Alvos de atribuição ou incremento: `fence`.

SHA-256 do trecho: `2e6396da5d8c040e34aa635799f6fd2c580735033504202c32e8d6ff416b2fb0`.

### evaluation:539736

Chamadas escritas diretamente neste corpo: `.trimEnd`, `/\s/.test`, `FENCE_AFTER_TEXT.exec`, `FENCE_OPENING.exec`, `SLACK_BULLET.test`, `SLACK_LINK.test`, `body.split`, `line.replace`, `line.trim`, `new Set`, `opening[computed].includes`, `opening[computed].startsWith`, `opening[computed].trim`, `problems.add`, `readFenceLine`.

Alvos de atribuição ou incremento: `fence`.

SHA-256 do trecho: `2e6396da5d8c040e34aa635799f6fd2c580735033504202c32e8d6ff416b2fb0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
