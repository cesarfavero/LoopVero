# `draftByDefaultForTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:541889-541891](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541889-L541891) | `FunctionDeclaration` | não | `host, decisions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:541889-541891](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541889-L541891) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:541889

Chamadas escritas diretamente neste corpo: `draftToolAvailableForTurn`, `host.gates.draftExternalMessageByDefault`.

SHA-256 do trecho: `c2b20201b33a27957f0901262a08917715068876816cb25840b1cba28a7ace2f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
