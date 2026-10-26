# `stripLeadingScratchpad`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617228-617239](../../../../../reference/runtime/host-main.cjs#L617228-L617239) | `FunctionDeclaration` | não | `inner` |
| [evaluation:285768-285779](../../../../../reference/runtime/sand-eval-runner.cjs#L285768-L285779) | `FunctionDeclaration` | não | `inner` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617228-617239](../../../../../reference/runtime/host-main.cjs#L617228-L617239) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285768-285779](../../../../../reference/runtime/sand-eval-runner.cjs#L285768-L285779) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:617228

Chamadas escritas diretamente neste corpo: `.trimStart`, `/^[0-9]/.test`, `inner.trim`, `text3.lastIndexOf`, `text3.replace`, `text3.slice`, `text3.startsWith`.

Alvos de atribuição ou incremento: `text3`.

SHA-256 do trecho: `9c86d085d25a3db0228a01116695d1ef1d1d126f798eb35770cba3791b579681`.

### evaluation:285768

Chamadas escritas diretamente neste corpo: `.trimStart`, `/^[0-9]/.test`, `inner.trim`, `text3.lastIndexOf`, `text3.replace`, `text3.slice`, `text3.startsWith`.

Alvos de atribuição ou incremento: `text3`.

SHA-256 do trecho: `9c86d085d25a3db0228a01116695d1ef1d1d126f798eb35770cba3791b579681`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
