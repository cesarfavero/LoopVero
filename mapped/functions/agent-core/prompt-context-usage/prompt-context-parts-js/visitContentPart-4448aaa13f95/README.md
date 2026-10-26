# `visitContentPart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476296-476336](../../../../../../reference/runtime/host-main.cjs#L476296-L476336) | `FunctionDeclaration` | não | `scope, part, index` |
| [evaluation:255606-255646](../../../../../../reference/runtime/sand-eval-runner.cjs#L255606-L255646) | `FunctionDeclaration` | não | `scope, part, index` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476296-476336](../../../../../../reference/runtime/host-main.cjs#L476296-L476336) | 13 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:255606-255646](../../../../../../reference/runtime/sand-eval-runner.cjs#L255606-L255646) | 13 | 0 | 0 | 2 | 0 | 0 |

### host:476296

Chamadas escritas diretamente neste corpo: `contentPath`, `visitField`, `visitValue`.

SHA-256 do trecho: `89e1cb9adb858b3b1e3aabe7b0494e03ac7aa7bf1af32ece64bc5e0ae009fe69`.

### evaluation:255606

Chamadas escritas diretamente neste corpo: `contentPath`, `visitField`, `visitValue`.

SHA-256 do trecho: `89e1cb9adb858b3b1e3aabe7b0494e03ac7aa7bf1af32ece64bc5e0ae009fe69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
