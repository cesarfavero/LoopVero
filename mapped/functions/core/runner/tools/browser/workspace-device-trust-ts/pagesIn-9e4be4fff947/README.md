# `pagesIn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/workspace-device-trust.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/workspace-device-trust-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743324-743328](../../../../../../../../reference/runtime/host-main.cjs#L743324-L743328) | `FunctionDeclaration` | não | `text3` |
| [evaluation:516175-516179](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516175-L516179) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743324-743328](../../../../../../../../reference/runtime/host-main.cjs#L743324-L743328) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:516175-516179](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516175-L516179) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:743324

Chamadas escritas diretamente neste corpo: `.map`, `text3.matchAll`, `urls.map`.

SHA-256 do trecho: `a4b3b682a02a848b2bf7d7666d618c3d726bddc95666dd1782e3e683c7c6090d`.

### evaluation:516175

Chamadas escritas diretamente neste corpo: `.map`, `text3.matchAll`, `urls.map`.

SHA-256 do trecho: `a4b3b682a02a848b2bf7d7666d618c3d726bddc95666dd1782e3e683c7c6090d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
