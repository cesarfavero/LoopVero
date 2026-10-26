# `createInProcessSearch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/virtual-mounts/in-process-search.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766002-766051](../../../../../../reference/runtime/host-main.cjs#L766002-L766051) | `FunctionDeclaration` | não | `options2` |
| [evaluation:559366-559415](../../../../../../reference/runtime/sand-eval-runner.cjs#L559366-L559415) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766002-766051](../../../../../../reference/runtime/host-main.cjs#L766002-L766051) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559366-559415](../../../../../../reference/runtime/sand-eval-runner.cjs#L559366-L559415) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:766002

Chamadas escritas diretamente neste corpo: `new WeakMap`.

SHA-256 do trecho: `93c3525a61310e89daedb19bf806ee3a3e88d47a1a58092fdfa1368536a3adc7`.

### evaluation:559366

Chamadas escritas diretamente neste corpo: `new WeakMap`.

SHA-256 do trecho: `ce7fec4b6553022df2b68f9d2f2074c7cd2abd08f8bb414a41a2cb1987909b09`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
