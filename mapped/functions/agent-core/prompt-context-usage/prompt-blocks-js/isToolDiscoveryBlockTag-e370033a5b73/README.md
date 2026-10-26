# `isToolDiscoveryBlockTag`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-blocks.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476150-476152](../../../../../../reference/runtime/host-main.cjs#L476150-L476152) | `FunctionDeclaration` | não | `tagName2` |
| [evaluation:255460-255462](../../../../../../reference/runtime/sand-eval-runner.cjs#L255460-L255462) | `FunctionDeclaration` | não | `tagName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476150-476152](../../../../../../reference/runtime/host-main.cjs#L476150-L476152) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255460-255462](../../../../../../reference/runtime/sand-eval-runner.cjs#L255460-L255462) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476150

Chamadas escritas diretamente neste corpo: `isDynamicToolBlockTag`, `isMcpBlockTag`.

SHA-256 do trecho: `ec1aba96f71693be68e7327a1bbd5bf6b6e485f1187565067764d0f0209bffb3`.

### evaluation:255460

Chamadas escritas diretamente neste corpo: `isDynamicToolBlockTag`, `isMcpBlockTag`.

SHA-256 do trecho: `0b50bd590f79580d3234c6a9866cb9e733f5199bfbc12f5143c4119a834f024f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
