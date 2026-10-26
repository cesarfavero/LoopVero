# `isInfrastructureError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725018-725027](../../../../../../../reference/runtime/host-main.cjs#L725018-L725027) | `FunctionDeclaration` | não | `error64` |
| [evaluation:479989-479998](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479989-L479998) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725018-725027](../../../../../../../reference/runtime/host-main.cjs#L725018-L725027) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:479989-479998](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479989-L479998) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:725018

Chamadas escritas diretamente neste corpo: `INFRASTRUCTURE_ERROR_NAMES.has`, `current2.message.includes`.

Alvos de atribuição ou incremento: `current2`, `depth`.

SHA-256 do trecho: `fb685aebd5e44c7386a79e653333a48cc05e8b05eb865ab316d204f27f67dc42`.

### evaluation:479989

Chamadas escritas diretamente neste corpo: `INFRASTRUCTURE_ERROR_NAMES.has`, `current2.message.includes`.

Alvos de atribuição ou incremento: `current2`, `depth`.

SHA-256 do trecho: `bcf498d3e669fb3dd3daf9a821167fe9f1a72cf4117b031ed33c14a212654f5f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
