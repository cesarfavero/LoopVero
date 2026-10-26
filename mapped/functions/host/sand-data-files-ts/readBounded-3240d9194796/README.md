# `readBounded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453806-453821](../../../../../reference/runtime/host-main.cjs#L453806-L453821) | `FunctionDeclaration` | sim | `file2, path33, maxBytes, sizeHint` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453806-453821](../../../../../reference/runtime/host-main.cjs#L453806-L453821) | 3 | 1 | 1 | 1 | 1 | 0 |

### host:453806

Chamadas escritas diretamente neste corpo: `Buffer.allocUnsafe`, `Math.max`, `Math.min`, `buffer.copy`, `buffer.toString`, `file2.read`, `oversizedSandDataFile`.

Alvos de atribuição ou incremento: `buffer`, `length`.

Alvos de lançamento explícito: `oversizedSandDataFile`.

SHA-256 do trecho: `37f2a447efbb2754b67b186f19f93e4b2e2d29201a31e7b11db93318f35b099b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
