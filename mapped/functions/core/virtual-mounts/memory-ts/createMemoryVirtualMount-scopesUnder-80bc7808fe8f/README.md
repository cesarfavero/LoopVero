# `createMemoryVirtualMount/scopesUnder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/virtual-mounts/memory.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769624-769629](../../../../../../reference/runtime/host-main.cjs#L769624-L769629) | `ArrowFunctionExpression` | não | `path33` |
| [evaluation:565293-565298](../../../../../../reference/runtime/sand-eval-runner.cjs#L565293-L565298) | `ArrowFunctionExpression` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769624-769629](../../../../../../reference/runtime/host-main.cjs#L769624-L769629) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:565293-565298](../../../../../../reference/runtime/sand-eval-runner.cjs#L565293-L565298) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:769624

Chamadas escritas diretamente neste corpo: `available.filter`, `availableScopes`, `scopeOfPath`.

SHA-256 do trecho: `4489f84af1b3dc0eebd7574b43c5349b951267a2a623d55b30e5f18460072867`.

### evaluation:565293

Chamadas escritas diretamente neste corpo: `available.filter`, `availableScopes`, `scopeOfPath`.

SHA-256 do trecho: `4489f84af1b3dc0eebd7574b43c5349b951267a2a623d55b30e5f18460072867`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
