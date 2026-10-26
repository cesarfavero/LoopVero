# `fitSchemaToMock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:555877-555933](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555877-L555933) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555877-555933](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555877-L555933) | 9 | 1 | 0 | 3 | 0 | 0 |

### evaluation:555877

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `Object.fromEntries`, `Object.keys`, `adjustments.filter`, `emptied.join`, `kept.add`, `lost.join`, `missing.filter`, `narrowToAcceptedParameters`, `new Set`, `objectSchema2.safeParse`, `propertiesOf`, `requiredOf`, `unmocked.map`, `withoutProperties`.

SHA-256 do trecho: `11836919ae5a638d401be14b1ee45e070bfadc662452cb5b3e1c7c39e9050159`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
