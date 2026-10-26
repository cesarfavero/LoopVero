# `Scope3.lookup`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:749618-749620](../../../../../../../../reference/runtime/host-main.cjs#L749618-L749620) | `method` | não | `name18` |
| [evaluation:522469-522471](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522469-L522471) | `method` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:749618-749620](../../../../../../../../reference/runtime/host-main.cjs#L749618-L749620) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:522469-522471](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L522469-L522471) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:749618

Chamadas escritas diretamente neste corpo: `this.parent.lookup`, `this.vars.get`.

SHA-256 do trecho: `8a14a7acb7820f9f56711f20f9e3c559985cf97becb64daf3d8f2d670e7eb3f1`.

### evaluation:522469

Chamadas escritas diretamente neste corpo: `this.parent.lookup`, `this.vars.get`.

SHA-256 do trecho: `8a14a7acb7820f9f56711f20f9e3c559985cf97becb64daf3d8f2d670e7eb3f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
