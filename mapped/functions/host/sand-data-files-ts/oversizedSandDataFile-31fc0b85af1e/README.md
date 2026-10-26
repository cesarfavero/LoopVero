# `oversizedSandDataFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453790-453792](../../../../../reference/runtime/host-main.cjs#L453790-L453792) | `FunctionDeclaration` | não | `path33, maxBytes` |
| [evaluation:627532-627534](../../../../../reference/runtime/sand-eval-runner.cjs#L627532-L627534) | `FunctionDeclaration` | não | `path33, maxBytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453790-453792](../../../../../reference/runtime/host-main.cjs#L453790-L453792) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627532-627534](../../../../../reference/runtime/sand-eval-runner.cjs#L627532-L627534) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:453790

Chamadas escritas diretamente neste corpo: `new RangeError`.

SHA-256 do trecho: `cf946ab51d29be6179ada8b9c2a987882467084a6701f1824a7a9304996f90c2`.

### evaluation:627532

Chamadas escritas diretamente neste corpo: `new RangeError`.

SHA-256 do trecho: `cf946ab51d29be6179ada8b9c2a987882467084a6701f1824a7a9304996f90c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
