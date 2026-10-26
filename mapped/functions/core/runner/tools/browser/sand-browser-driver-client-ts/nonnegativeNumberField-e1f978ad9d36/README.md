# `nonnegativeNumberField`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/sand-browser-driver-client.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/sand-browser-driver-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724184-724188](../../../../../../../../reference/runtime/host-main.cjs#L724184-L724188) | `FunctionDeclaration` | não | `fields3, key` |
| [evaluation:560078-560082](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560078-L560082) | `FunctionDeclaration` | não | `fields3, key` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724184-724188](../../../../../../../../reference/runtime/host-main.cjs#L724184-L724188) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560078-560082](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560078-L560082) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:724184

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `fields3.get`.

SHA-256 do trecho: `a126cd6073655987f263d62711cedfbf1c8383c57010eb0c1bae680a7b090a2a`.

### evaluation:560078

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `fields3.get`.

SHA-256 do trecho: `a126cd6073655987f263d62711cedfbf1c8383c57010eb0c1bae680a7b090a2a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
