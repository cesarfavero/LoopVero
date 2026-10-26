# `createSandDurableFileOwner/once2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `shared/durable-file-owner.ts` · [README do módulo](../../../../modules/shared/durable-file-owner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453439-453445](../../../../../reference/runtime/host-main.cjs#L453439-L453445) | `ArrowFunctionExpression` | não | `path33, event, errorClass, line` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453439-453445](../../../../../reference/runtime/host-main.cjs#L453439-L453445) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:453439

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `log5`, `report`, `seen.add`, `seen.has`.

SHA-256 do trecho: `cefefc5baa5ff1b6f6e23e81681b5f6eb09e627acabf879acbac1abe1440e6f3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
