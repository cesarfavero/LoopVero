# `automationToolDescription`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771743-771753](../../../../../../../../reference/runtime/host-main.cjs#L771743-L771753) | `FunctionDeclaration` | não | `options2` |
| [evaluation:570976-570986](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570976-L570986) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771743-771753](../../../../../../../../reference/runtime/host-main.cjs#L771743-L771753) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570976-570986](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570976-L570986) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:771743

Chamadas escritas diretamente neste corpo: `.join`.

SHA-256 do trecho: `38f8e3ab67510f4779ea8b880cbf2b3b71ac02db3f775553c607ba744d942d5c`.

### evaluation:570976

Chamadas escritas diretamente neste corpo: `.join`.

SHA-256 do trecho: `38f8e3ab67510f4779ea8b880cbf2b3b71ac02db3f775553c607ba744d942d5c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
