# `plannedEmailSignatureReads`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755612-755617](../../../../../../../../reference/runtime/host-main.cjs#L755612-L755617) | `FunctionDeclaration` | não | `route, hostedSendAs = false` |
| [evaluation:541487-541492](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541487-L541492) | `FunctionDeclaration` | não | `route, hostedSendAs = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755612-755617](../../../../../../../../reference/runtime/host-main.cjs#L755612-L755617) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:541487-541492](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541487-L541492) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:755612

Chamadas escritas diretamente neste corpo: `signatureReads`.

SHA-256 do trecho: `c27406ac14ee2477bcf6eb06e717d01c6c0aea68bd28145c517b32d817e66c5c`.

### evaluation:541487

Chamadas escritas diretamente neste corpo: `signatureReads`.

SHA-256 do trecho: `c27406ac14ee2477bcf6eb06e717d01c6c0aea68bd28145c517b32d817e66c5c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
