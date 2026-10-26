# `describeAmbiguousConnectorConnection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/connector-files/connection-name.ts` · [README do módulo](../../../../../../modules/core/runner/connector-files/connection-name-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773737-773739](../../../../../../../reference/runtime/host-main.cjs#L773737-L773739) | `FunctionDeclaration` | não | `requested, resolution` |
| [evaluation:572958-572960](../../../../../../../reference/runtime/sand-eval-runner.cjs#L572958-L572960) | `FunctionDeclaration` | não | `requested, resolution` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773737-773739](../../../../../../../reference/runtime/host-main.cjs#L773737-L773739) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572958-572960](../../../../../../../reference/runtime/sand-eval-runner.cjs#L572958-L572960) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773737

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `resolution.candidates.join`.

SHA-256 do trecho: `5717ea8e8799a432b5436b9926902167d5e8d2ab1db56fd196a46fec4213d8da`.

### evaluation:572958

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `resolution.candidates.join`.

SHA-256 do trecho: `5717ea8e8799a432b5436b9926902167d5e8d2ab1db56fd196a46fec4213d8da`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
