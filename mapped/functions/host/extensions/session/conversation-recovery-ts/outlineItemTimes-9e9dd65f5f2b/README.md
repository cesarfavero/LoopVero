# `outlineItemTimes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/conversation-recovery.ts` · [README do módulo](../../../../../../modules/host/extensions/session/conversation-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719871-719885](../../../../../../../reference/runtime/host-main.cjs#L719871-L719885) | `FunctionDeclaration` | não | `state` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719871-719885](../../../../../../../reference/runtime/host-main.cjs#L719871-L719885) | 4 | 2 | 0 | 1 | 0 | 0 |

### host:719871

Chamadas escritas diretamente neste corpo: `durableTimeMs`, `new Map`, `state.turns.entries`, `steps.entries`, `times.set`.

SHA-256 do trecho: `46754f4b7aa8da6d4d455ed9af09a5560dfc63c3b24110af64238f06d06e722e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
