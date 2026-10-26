# `readCappedSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453770-453773](../../../../../reference/runtime/host-main.cjs#L453770-L453773) | `FunctionDeclaration` | não | `fd, path33, maxBytes` |
| [evaluation:627512-627515](../../../../../reference/runtime/sand-eval-runner.cjs#L627512-L627515) | `FunctionDeclaration` | não | `fd, path33, maxBytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453770-453773](../../../../../reference/runtime/host-main.cjs#L453770-L453773) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:627512-627515](../../../../../reference/runtime/sand-eval-runner.cjs#L627512-L627515) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:453770

Chamadas escritas diretamente neste corpo: `oversizedSandDataFile`, `readBoundedSync`.

Alvos de lançamento explícito: `oversizedSandDataFile`.

SHA-256 do trecho: `55faf445087d16268bef88fdbfe01aa41c50c5a4f4c32d68dc5fcc0be0acd966`.

### evaluation:627512

Chamadas escritas diretamente neste corpo: `oversizedSandDataFile`, `readBoundedSync`.

Alvos de lançamento explícito: `oversizedSandDataFile`.

SHA-256 do trecho: `1b9488a713e1044ac559cdb5af58973bd3bccdcf3e696f24103fff60a1e9ad93`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
