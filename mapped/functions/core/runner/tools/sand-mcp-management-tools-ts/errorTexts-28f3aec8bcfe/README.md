# `errorTexts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780051-780058](../../../../../../../reference/runtime/host-main.cjs#L780051-L780058) | `FunctionDeclaration` | não | `error64` |
| [evaluation:580296-580303](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580296-L580303) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780051-780058](../../../../../../../reference/runtime/host-main.cjs#L780051-L780058) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:580296-580303](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580296-L580303) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:780051

Chamadas escritas diretamente neste corpo: `.map`, `error64.findDetails`.

SHA-256 do trecho: `b6c6cc12ec2a3460c9c2bc658991f289958538841efefdc4d629351e586ad7ae`.

### evaluation:580296

Chamadas escritas diretamente neste corpo: `.map`, `error63.findDetails`.

SHA-256 do trecho: `1653745edbaa9e7c02fd10d320679b198b0b02f0a955b64e62693d231cba22e8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
