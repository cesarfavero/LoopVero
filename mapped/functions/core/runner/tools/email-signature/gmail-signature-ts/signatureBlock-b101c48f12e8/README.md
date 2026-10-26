# `signatureBlock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755738-755745](../../../../../../../../reference/runtime/host-main.cjs#L755738-L755745) | `FunctionDeclaration` | não | `messageHtml` |
| [evaluation:541613-541620](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541613-L541620) | `FunctionDeclaration` | não | `messageHtml` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755738-755745](../../../../../../../../reference/runtime/host-main.cjs#L755738-L755745) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:541613-541620](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541613-L541620) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:755738

Chamadas escritas diretamente neste corpo: `GMAIL_SIGNATURE_OPEN.exec`, `closingDiv`, `own3.slice`, `ownPart`.

SHA-256 do trecho: `499ef7bd31094b715d819b9ab97b25d791714a7ba96edaae6b588f9aa5600f56`.

### evaluation:541613

Chamadas escritas diretamente neste corpo: `GMAIL_SIGNATURE_OPEN.exec`, `closingDiv`, `own3.slice`, `ownPart`.

SHA-256 do trecho: `f9d55f3186da9f2128ef68f33be7d04e766e746efa808831697fe88ad936e7e2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
