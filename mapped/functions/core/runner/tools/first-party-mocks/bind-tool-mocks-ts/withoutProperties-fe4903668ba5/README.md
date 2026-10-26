# `withoutProperties`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:555865-555876](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555865-L555876) | `FunctionDeclaration` | não | `schema3, keys` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555865-555876](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555865-L555876) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:555865

Chamadas escritas diretamente neste corpo: `.filter`, `Object.entries`, `Object.fromEntries`, `new Set`, `objectSchema2.safeParse`, `parsed.data.required.filter`.

SHA-256 do trecho: `cc4186a6c37806cfcaedad3eb3732fe6171e3d1cf050ad3a7e97f7c0de845037`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
