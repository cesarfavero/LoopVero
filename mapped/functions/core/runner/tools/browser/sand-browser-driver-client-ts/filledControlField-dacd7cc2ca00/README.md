# `filledControlField`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/sand-browser-driver-client.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/sand-browser-driver-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724217-724242](../../../../../../../../reference/runtime/host-main.cjs#L724217-L724242) | `FunctionDeclaration` | não | `fields3, key` |
| [evaluation:560111-560136](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560111-L560136) | `FunctionDeclaration` | não | `fields3, key` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724217-724242](../../../../../../../../reference/runtime/host-main.cjs#L724217-L724242) | 11 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:560111-560136](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560111-L560136) | 11 | 0 | 0 | 3 | 0 | 0 |

### host:724217

Chamadas escritas diretamente neste corpo: `booleanField`, `fields3.get`, `objectFields`, `stringField2`.

SHA-256 do trecho: `9896cacf5ab1ec1a67d6ab778810331787d827801cae8b860928a8316e891538`.

### evaluation:560111

Chamadas escritas diretamente neste corpo: `booleanField`, `fields3.get`, `objectFields`, `stringField2`.

SHA-256 do trecho: `924b13325b37cc8f4f2c8bdf94d9cb0780d6a109a182fbd5ec767ee7f6393a7a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
