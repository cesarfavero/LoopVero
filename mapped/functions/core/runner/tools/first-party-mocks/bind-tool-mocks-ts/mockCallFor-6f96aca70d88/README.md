# `mockCallFor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:555961-555968](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555961-L555968) | `FunctionDeclaration` | não | `target, calledArgs, alias2, mockSchemas, unmocked` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555961-555968](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555961-L555968) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:555961

Chamadas escritas diretamente neste corpo: `isLegacyStateToolName`, `mockSchemas.has`, `withoutKeys`.

SHA-256 do trecho: `6d8057fed76d96523b383203f696305b419086703a1996d1c7ea228efd0dc038`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
