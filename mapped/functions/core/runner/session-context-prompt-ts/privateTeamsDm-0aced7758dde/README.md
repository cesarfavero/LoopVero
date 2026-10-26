# `privateTeamsDm`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/session-context-prompt.ts` · [README do módulo](../../../../../modules/core/runner/session-context-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538366-538370](../../../../../../reference/runtime/sand-eval-runner.cjs#L538366-L538370) | `FunctionDeclaration` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538366-538370](../../../../../../reference/runtime/sand-eval-runner.cjs#L538366-L538370) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:538366

Chamadas escritas diretamente neste corpo: `session.sessionId.startsWith`.

SHA-256 do trecho: `6aff4733f19dfc76f042811f9f6498bf14545642708724ff6b934fa79ca01622`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
