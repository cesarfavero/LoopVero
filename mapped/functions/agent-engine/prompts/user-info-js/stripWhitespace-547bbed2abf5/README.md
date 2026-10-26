# `stripWhitespace`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640328-640330](../../../../../../reference/runtime/host-main.cjs#L640328-L640330) | `FunctionDeclaration` | não | `s3` |
| [evaluation:430942-430944](../../../../../../reference/runtime/sand-eval-runner.cjs#L430942-L430944) | `FunctionDeclaration` | não | `s3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640328-640330](../../../../../../reference/runtime/host-main.cjs#L640328-L640330) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430942-430944](../../../../../../reference/runtime/sand-eval-runner.cjs#L430942-L430944) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640328

Chamadas escritas diretamente neste corpo: `s3.replace`.

SHA-256 do trecho: `48bd9daf21f5de2c0074a2a2281cd9b000f06d6d6f336a4be94dda0f682ba2d2`.

### evaluation:430942

Chamadas escritas diretamente neste corpo: `s3.replace`.

SHA-256 do trecho: `48bd9daf21f5de2c0074a2a2281cd9b000f06d6d6f336a4be94dda0f682ba2d2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
