# `openRefused`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message/open.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/send-message/open-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557833-557837](../../../../../../../../reference/runtime/host-main.cjs#L557833-L557837) | `FunctionDeclaration` | não | `reason` |
| [evaluation:550647-550651](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L550647-L550651) | `FunctionDeclaration` | não | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557833-557837](../../../../../../../../reference/runtime/host-main.cjs#L557833-L557837) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:550647-550651](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L550647-L550651) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557833

Chamadas escritas diretamente neste corpo: `new SandToolInputError`.

SHA-256 do trecho: `ecabf211b4f8e1ac12685c212d9a1380969235f07536be3b5263e4a14eff93f8`.

### evaluation:550647

Chamadas escritas diretamente neste corpo: `new SandToolInputError`.

SHA-256 do trecho: `ecabf211b4f8e1ac12685c212d9a1380969235f07536be3b5263e4a14eff93f8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
