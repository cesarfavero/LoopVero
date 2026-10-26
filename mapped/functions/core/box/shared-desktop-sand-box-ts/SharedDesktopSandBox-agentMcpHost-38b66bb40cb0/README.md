# `SharedDesktopSandBox.agentMcpHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:555039-555042](../../../../../../reference/runtime/host-main.cjs#L555039-L555042) | `method` | sim | `ctx, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555039-555042](../../../../../../reference/runtime/host-main.cjs#L555039-L555042) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:555039

Chamadas escritas diretamente neste corpo: `this.inAgentQueue`.

SHA-256 do trecho: `39fa68328ad5e2ce1a733c7c2da8f6b9de390e4040f42d05c8692b0592661704`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
