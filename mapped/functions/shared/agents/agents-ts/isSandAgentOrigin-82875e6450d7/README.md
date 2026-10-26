# `isSandAgentOrigin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/agents.ts` · [README do módulo](../../../../../modules/shared/agents/agents-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485320-485322](../../../../../../reference/runtime/host-main.cjs#L485320-L485322) | `FunctionDeclaration` | não | `value` |
| [evaluation:628997-628999](../../../../../../reference/runtime/sand-eval-runner.cjs#L628997-L628999) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485320-485322](../../../../../../reference/runtime/host-main.cjs#L485320-L485322) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:628997-628999](../../../../../../reference/runtime/sand-eval-runner.cjs#L628997-L628999) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485320

Chamadas escritas diretamente neste corpo: `SAND_AGENT_ORIGINS.some`.

SHA-256 do trecho: `b5da00dc5387c352c9916c90dc352920ff90391dc2bc4fa7cc680de84c08f311`.

### evaluation:628997

Chamadas escritas diretamente neste corpo: `SAND_AGENT_ORIGINS.some`.

SHA-256 do trecho: `b5da00dc5387c352c9916c90dc352920ff90391dc2bc4fa7cc680de84c08f311`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
