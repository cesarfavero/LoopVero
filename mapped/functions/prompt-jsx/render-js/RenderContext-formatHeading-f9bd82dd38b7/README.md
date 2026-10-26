# `RenderContext.formatHeading`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/render.js` · [README do módulo](../../../../modules/prompt-jsx/render-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:629284-629291](../../../../../reference/runtime/host-main.cjs#L629284-L629291) | `method` | não | `type2, content` |
| [evaluation:318301-318308](../../../../../reference/runtime/sand-eval-runner.cjs#L318301-L318308) | `method` | não | `type2, content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:629284-629291](../../../../../reference/runtime/host-main.cjs#L629284-L629291) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:318301-318308](../../../../../reference/runtime/sand-eval-runner.cjs#L318301-L318308) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:629284

Chamadas escritas diretamente neste corpo: `#.repeat`, `content.trim`, `parseInt`, `type2.slice`.

SHA-256 do trecho: `0623de58207476de382107fbfe4405b24637dcf5dc75808811b30f86b18e8868`.

### evaluation:318301

Chamadas escritas diretamente neste corpo: `#.repeat`, `content.trim`, `parseInt`, `type2.slice`.

SHA-256 do trecho: `0623de58207476de382107fbfe4405b24637dcf5dc75808811b30f86b18e8868`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
