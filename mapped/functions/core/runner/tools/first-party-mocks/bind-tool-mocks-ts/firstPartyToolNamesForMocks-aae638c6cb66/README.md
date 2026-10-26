# `firstPartyToolNamesForMocks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:555834-555836](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555834-L555836) | `FunctionDeclaration` | não | `mockTools` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555834-555836](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555834-L555836) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:555834

Chamadas escritas diretamente neste corpo: `mockTools.flatMap`, `new Set`.

SHA-256 do trecho: `69664b5512528f4c66796482054023864e4ef80b6e7cda9dc115848fc50a77f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
