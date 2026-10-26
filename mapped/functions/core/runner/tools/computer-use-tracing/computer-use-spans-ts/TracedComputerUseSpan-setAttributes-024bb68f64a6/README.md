# `TracedComputerUseSpan.setAttributes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742999-743001](../../../../../../../../reference/runtime/host-main.cjs#L742999-L743001) | `method` | não | `attributes` |
| [evaluation:515850-515852](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515850-L515852) | `method` | não | `attributes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742999-743001](../../../../../../../../reference/runtime/host-main.cjs#L742999-L743001) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515850-515852](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515850-L515852) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:742999

Chamadas escritas diretamente neste corpo: `this.span.setAttributes`.

SHA-256 do trecho: `fcfd73a73e1dc1728c9fce1b4ea19171c10724b0109131fedb08c08c8ab4feca`.

### evaluation:515850

Chamadas escritas diretamente neste corpo: `this.span.setAttributes`.

SHA-256 do trecho: `fcfd73a73e1dc1728c9fce1b4ea19171c10724b0109131fedb08c08c8ab4feca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
