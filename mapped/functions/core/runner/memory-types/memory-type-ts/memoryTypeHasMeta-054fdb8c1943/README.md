# `memoryTypeHasMeta`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-types/memory-type.ts` · [README do módulo](../../../../../../modules/core/runner/memory-types/memory-type-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702573-702575](../../../../../../../reference/runtime/host-main.cjs#L702573-L702575) | `FunctionDeclaration` | não | `memoryType` |
| [evaluation:535023-535025](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535023-L535025) | `FunctionDeclaration` | não | `memoryType` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702573-702575](../../../../../../../reference/runtime/host-main.cjs#L702573-L702575) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:535023-535025](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535023-L535025) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702573

Chamadas escritas diretamente neste corpo: `Object.keys`.

SHA-256 do trecho: `692ce38cacffbff37bf125bf4cd16d6e58b4c0abed86f69cf0ea9ae4e440b42d`.

### evaluation:535023

Chamadas escritas diretamente neste corpo: `Object.keys`.

SHA-256 do trecho: `692ce38cacffbff37bf125bf4cd16d6e58b4c0abed86f69cf0ea9ae4e440b42d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
