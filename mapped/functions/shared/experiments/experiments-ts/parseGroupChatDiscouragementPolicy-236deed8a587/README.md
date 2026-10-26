# `parseGroupChatDiscouragementPolicy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/experiments/experiments.ts` · [README do módulo](../../../../../modules/shared/experiments/experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451294-451297](../../../../../../reference/runtime/host-main.cjs#L451294-L451297) | `FunctionDeclaration` | não | `value` |
| [evaluation:597017-597020](../../../../../../reference/runtime/sand-eval-runner.cjs#L597017-L597020) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451294-451297](../../../../../../reference/runtime/host-main.cjs#L451294-L451297) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:597017-597020](../../../../../../reference/runtime/sand-eval-runner.cjs#L597017-L597020) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:451294

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `SAND_GROUP_CHAT_DISCOURAGEMENT_POLICIES.find`, `value.trim`.

SHA-256 do trecho: `85f7c62d49a2f717ada0092e1d6149324bca1da3fbf2008236f6f347ec749d5a`.

### evaluation:597017

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `SAND_GROUP_CHAT_DISCOURAGEMENT_POLICIES.find`, `value.trim`.

SHA-256 do trecho: `85f7c62d49a2f717ada0092e1d6149324bca1da3fbf2008236f6f347ec749d5a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
